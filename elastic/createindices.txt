######	CREATING SOME EVENT TEMPLATES	#########

curl -XPUT 'http://localhost:9200/templates/event/1' -d '{
    "type" : "condom couture",
    "number_of_planners" : "5",
    "days_to_plan" : "90",
	"budget" : "1500",
	"difficulty" : "7"
}'

curl -XPUT 'http://localhost:9200/templates/event/2' -d '{
    "type" : "walk a thon",
    "number_of_planners" : "4",
    "days_to_plan" : "30",
	"budget" : "250",
	"difficulty" : "6"
}'

curl -XPUT 'http://localhost:9200/templates/event/2' -d '{
    "type" : "tabling",
    "number_of_planners" : "1",
    "days_to_plan" : "2",
	"budget" : "0",
	"difficulty" : "3"
}'


######	CREATING SOME EVENT INSTANCES	#########

curl -XPUT 'http://localhost:9200/instance/event/1' -d '{
    "type" : "condom couture",
	"chapter" : "University of Wyoming",
	"date" : "2012-03-24",
    "number_of_planners" : "5",
    "days_to_plan" : "90",
	"amount_raised" : "5000",
	"cost" : "500",
	"difficulty" : "7",
	"pluses" : "The greek community came, we werent expecting them to show up! Be sure to reach out to frats.",
	"deltas" : "We had some religious nuts protesting, that was a real bummer.",
	"notes" : ""
}'

curl -XPUT 'http://localhost:9200/instance/event/2' -d '{
    "type" : "tabling",
	"chapter" : "University of Wyoming",
	"date" : "2012-03-24",
    "number_of_planners" : "2",
    "days_to_plan" : "1",
	"amount_raised" : "400",
	"cost" : "0",
	"difficulty" : "2",
	"pluses" : "Our chapters decided to table on Friday because we saw the new Pin of Hope video!",
	"deltas" : "None, super easy and $400 for PIH!",
	"notes" : "Can we get a regular Friday table?"
}'

curl -XPUT 'http://localhost:9200/instance/event/3' -d '{
    "type" : "condom couture",
	"chapter" : "University of Texas",
	"date" : "2011-11-14",
    "number_of_planners" : "9",
    "days_to_plan" : "60",
	"amount_raised" : "15000",
	"cost" : "3000",
	"difficulty" : "8",
	"pluses" : "This was the biggest campus event of the spring! The Presidents office helped us promote because last year was so successful.",
	"deltas" : "One of our dresses melted back stage.",
	"notes" : "Next year lets make sure we reach out to the LGBT community more!"
}'

#######	TEST SEARCHES ###########
curl -XGET 'http://localhost:9200/templates/event/_search?q=type:condom'

curl -XGET 'http://localhost:9200/instance/event/_search?q=type:condom'

curl -XGET 'http://localhost:9200/instance/event/_search?q=wyoming'
