import os
import sys
import requests

def ping_supabase(name, url, key):
    if not url or not key:
        print(f"::warning::Skipping {name}: URL or Key missing.")
        return True

    url = url.strip().rstrip('/')
    ping_url = f"{url}/rest/v1/"

    print(f"Pinging {name} at {url[:12]}...{url[-5:]}/rest/v1/")

    try:
        response = requests.get(
            ping_url,
            headers={"apikey": key, "Authorization": f"Bearer {key}"},
            timeout=10
        )
        if 200 <= response.status_code < 400:
            print(f"✅ {name} Success! Status code: {response.status_code}")
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
        ("Yasmine Fine Food", os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_ANON_KEY")),
        ("Ammar Portfolio", os.environ.get("AMMAR_SUPABASE_URL"), os.environ.get("AMMAR_SUPABASE_ANON_KEY"))
    ]

    success = True
    for name, url, key in projects:
        if not ping_supabase(name, url, key):
            success = False
    
    if not success:
        sys.exit(1)
