function getInfo() {
	var username = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

		if(username == 'user1' && email == 'user1@gmail.com' && password == 'DesignSites2') {
			window.location.href = '/Member/course-member.html';
		}

        else {
            alert("incorrect input");
        }
	}