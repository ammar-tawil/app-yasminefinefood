import os
import sys
import requests

def ping_supabase(name, url, key, table_name="leads"):
    if not url or not key:
        print(f"::warning::Skipping {name}: URL or Key missing.")
        return True

    url = url.strip().rstrip('/')
    # Querying a specific table ensures we don't hit the deprecated root endpoint
    ping_url = f"{url}/rest/v1/{table_name}?select=id&limit=1"

    print(f"Pinging {name} Database at {url[:12]}...{url[-5:]} (Table: {table_name})")

    try:
        response = requests.get(
            ping_url,
            headers={"apikey": key, "Authorization": f"Bearer {key}"},
            timeout=15
        )
        # 200 is success, 406/401/403 still counts as an API request that hits the DB layer
        if 200 <= response.status_code < 500:
            print(f"✅ {name} Activity Registered! Status code: {response.status_code}")
            return True
        else:
            print(f"::error::❌ {name} Failed! Status code: {response.status_code}")
            print(f"Response: {response.text[:200]}")
            return False
    except Exception as e:
        print(f"::error::❌ {name} Connection Error: {str(e)}")
        return False

if __name__ == "__main__":
    projects = [
        ("Yasmine Fine Food", os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_ANON_KEY"), "leads"),
        ("Ammar Portfolio", os.environ.get("AMMAR_SUPABASE_URL"), os.environ.get("AMMAR_SUPABASE_ANON_KEY"), "posts")
    ]

    success = True
    for name, url, key, table in projects:
        if not ping_supabase(name, url, key, table_name=table):
            success = False
    
    if not success:
        sys.exit(1)

