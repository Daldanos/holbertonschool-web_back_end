#!/usr/bin/env python3
"""List all documents in Python"""

import pymongo


def list_all(mongo_collection):
    """List all documents"""
    if mongo_collection:
        return list(mongo_collection.find())
    return []
