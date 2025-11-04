########### TEST DB CONNECTION ############
npx prisma db pull
###########################################

######## SCHEMA MIGRATION & MODEL GENERATION #############
npm run migrate
npm run generate
##########################################################
