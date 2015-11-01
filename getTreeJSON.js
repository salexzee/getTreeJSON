/* In the getJSON function, change the username from "username" to whatever your Treehouse username is. */
$.getJSON("https://teamtreehouse.com/username.json",function(treehouse){
    /* CREATING MAIN VARIABLES */
    var name = treehouse.name; /* Gets your actual name */
    var profile = treehouse.profile_name; /* Gets your user name */
    var url = treehouse.profile_url; /* Gets your profile URL */
    var badges = treehouse.badges; /* REQUIRED! Gets all of your badges */
    var gravatar_url = treehouse.gravatar_url; /* Gets your gravatar URL */
    var gravatar_hash = treehouse.gravatar_hash; /* Gets your gravatar hash / console.log this if you want to see what it is.*/
    
    /* DEALING WITH BADGES */
    /* You could either loop over the badges using a foreach loop or just choose a badge number if you know how many you have. */
    /* Badges are on a 0 based index so if you want the 10th badge, it would be badge 9. */
    /* These are all based off of the badges variable above */
    
    var badge_count = badges.length; /* Gets how many badges you have */
    var badge_first = badges[0]; /* Set this to any number below the badge_count. Used below */
    var set_badge = badges[50]; /* REQUIRED! Gets you a specific badge based on the number you specify */
    var badge_last = badges[badge_count - 1]; /* Gets the last badge no matter how many you have */
    var badge_id = set_badge.id; /* Gets selected badge ID number. Can replace set_badge with badge_first or badge_last. */
    var badge_name = set_badge.name; /* Gets selecte badge name. Can replace set_badge with badge_first or badge_last. */
    var badge_icon = set_badge.icon_url; /* Gets the URL for the badge icon image. Can replace set_badge with badge_first or badge_last. */
    var badge_date = set_badge.earned_date; /* Gets the date that you earned the badge. Can replace set_badge with badge_first or badge_last. */
    
    /* DEALING WITH COURSES */
    /* Some badges have their associated courses */
    /* Courses are structured similar to the way badges are */
    /* I'll be using the set_badge variable for these as an example */
    /* badge_last could also be used */
    var courses = set_badge.courses; /* Pulls all courses for a given badge */
    var course_count = courses.length; /* Gets the amount of courses required for that badge */
    var first_course = courses[0]; /* Gets the first course in the list */
    var last_course = courses[course_count - 1]; /* Gets the last course in the list */
    var set_course = courses[0]; /* Gets one of the courses based on your input */
    var course_title = set_course.title; /* Gets the title of the course you set */
    var course_url = set_course.url; /* Gets the URL of the course you set */
    var course_badge_count = set_course.badge_count; /* Gets the badge count of the course you set */
    
    /* DEALING WITH POINTS */
    var points = treehouse.points; /* Directs to the points object */
    var total = points.total; /* Gets your total number of points earned */
    /* Everthing below gets the amount of points earned in a specific field */
    var html = points.HTML;
    var css = points.CSS;
    var design = points.Design;
    var javascript = points.JavaScript;
    var ruby = points.Ruby;
    var php = points.PHP;
    var wordpress = points.WordPress;
    var ios = points.iOS;
    var android = points.Android;
    var dev_tools = points["Development Tools"];
    var business = points.Business;
    var python = points.Python;
    var java_points = points.Java;
    var digital_lit = points["Digital Literacy"];

/* ------------------------------------------------ */
    /* PLACE YOUR CODE BELOW THIS LINE */



    /* PLACE YOUR CODE ABOVE THIS LINE */
});
