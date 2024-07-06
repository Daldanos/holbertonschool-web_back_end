#!/usr/bin/env python3

"""Log stats """

from pymongo import MongoClient

def log_stats():
    # DB Connect
    client = MongoClient('localhost', 27017)
    db = client.logs
    collection = db.nginx

    # Count
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Count 2
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count3
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()