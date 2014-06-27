#!/usr/bin/env sh

s3cmd sync -P /var/www/api.inspectionsupport.net/* s3://api.inspectionsupport.net
