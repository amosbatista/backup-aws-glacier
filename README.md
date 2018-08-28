# backup-aws-glacier
This app receives a list of folders to upload then into an AWS Glacier vault.

The process is:
| For each folder:
|| For each sub-folders:
||| For each files:
|||| Generate its hash code
|||| Check if the same hash code has uploaded
|||| If yes:
||||| Upload it to Glacier
||||| Inform the hashcode to processed file
|||| Else:
||||| Inform duplicate to file


TODO:
|Insert time and hour of upload.
