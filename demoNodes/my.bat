@echo off
osmconvert64 TUM_footprint.osm --all-to-nodes --csv="@id @lat @lon" --csv=headline > uni.txt
pause