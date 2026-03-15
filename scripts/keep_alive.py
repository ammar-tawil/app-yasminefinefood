import os
import sys
import requests

def ping_supabase():
    url = os.environ.get("SUPABASE_URL", "").strip()
    key = os.environ.get("SUPABASE_ANON_KEY", "").strip()

    if not url:
        print("::error::SUPABASE_URL secret is missing.")
        sys.exit(1)
    if not key:
        print("::error::SUPABASE_ANON_KEY secret is missing.")
        sys.exit(1)

    # Ensure URL doesn't have trailing slash
    url = url.rstrip('/')
    ping_url = f"{url}/rest/v1/"

    print(f"Pinging Supabase at {url[:12]}...{url[-5:]}/rest/v1/")

    try:
        response = requests.get(
            ping_url,
            headers={
                "apikey": key,
                "Authorization": f"Bearer {key}"
            },
            timeout=10
        )
        
        status = response.status_code
        if 200 <= status < 400:
            print(f"✅ Success! Status code: {status}")
        else:
            print(f"::error::❌ Failed! Status code: {status}")
            print(f"Response: {response.text[:200]}")
            sys.exit(1)

    except Exception as e:
        print(f"::error::❌ Connection Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    ping_supabase()
