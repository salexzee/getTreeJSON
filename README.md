# getTreeJSON
This is a simple way to interact with the user profile JSON files on Team Treehouse.

To use this project, navigate into the javascript folder of your current project using your terminal. Once there, paste in the following command:

`git clone https://github.com/salexzee/getTreeJSON.git`

This will clone the project into your javascript folder. Now, link *gitTreeJSON.js* into your HTML page. Make sure you also have jQuery linked before the gitTreeJSON. It should look something like this:

```
	<script src="javascript/jquery.js"></script>
	<script src="javascript/getTreeJSON/getTreeJSON.js"></script>
	<script src="javascript/yourJS.js"></script>
</body>
```

The first thing you need to do is look at the first line of the code. Make sure you change the username from "username" to whatever user you're trying to get the stats of.

In *getTreeJSON.js* is where you'll be putting all the code that interacts with the Treehouse profile JSON files. Open the file and scroll to the bottom. You will see a comment that says, "Place your code below this line." When we get to the examples section, this is the place all that code will be located. Make sure you're keeping your code inside of that closing curly brace.

**Badges**

There are 3 variables used to decide which badge you'll be working with at any given time. These are: *set_badge*, *badge_first* and *badge_last*. The *set_badge* variable is the only one that needs to be set by the user. This variable is set to your 49th badge at location 50 in the badges array. Remember, when working with arrays, they're 0 based so if you want the 10th item, you'll need to use a key of 11. To set the *set_badges* variable, use the following code:

```
var badge_number = X;
set_badge = badges[badge_number];
```

Replace the "X" with whichever badge you'd like to get. By using the badge_number variable, you'll be able to use a bunch of functions with *set_badge*, but you'll just have to change the number in the *badge_number* variable.

If you look at the code under the "DEALING WITH BADGES" section of the code, you'll notice there are 3 variables set using the *set_badge* variable. You can change these from *set_badge* to either *badge_first* or *badge_last* if you want to get the beginning or ending badge. Eample (3) shows a good reason to use *badge_last* or *badge_first*.



Gist included [HERE!](https://gist.github.com/salexzee/71af99b14c25c78e33ba) if you just want to copy and paste this into your own JS file.

Examples
-----------

Examples are all used in the section that is for users to place their own code.

**Showing The Current Profile Name (Example 1)**

```
$("header").html("<h1>Welcome to the profile of " + name + "!</h1>" +
"<h3>" + name + "'s username is " + profile + ".</h3>");
```

*This code will provide a welcoming H1 using the real name of the user and in the H3 it'll provide you with their username name.*

**Listing Out Badges (Example 2)**

```
function listBadge(start, end, badges){
	var badge_position = 0;
	foreach(badge in badges) {
		if (badge_position >= start && badge_position <= end) {
			$("ul").add("<li>" + badge.name + "</li>");
		} 
		badge_position += 1;
	}
}

listBadge(3,10,badges);
```

*This code will list the badge names from the badge at position 3, to the badge at position 10 in the badges array. It basically looks for the first UL elenemt and inside of that LI elements are created, each containing a badge name.*


Dependencies
-----------
* jQuery
