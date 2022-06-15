#!/bin/bash
set -e
service mysql start
mysql < /app/database_v1.sql
service mysql stop