dropdb -U rashmiranganathan testmoviestore
createdb -U rashmiranganathan testmoviestore
psql -U rashmiranganathan -d testmoviestore -f moviestoreDbValue.sql
