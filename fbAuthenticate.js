 
  var familyData;
 function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();

    } else if (response.status === 'not_authorized') {
      FB.login(function(response) {
        statusChangeCallback2(response);
      }, {scope: 'public_profile,email'});

    } else {
      alert("not connected, not logged into facebook, we don't know");
    }
  }

  function statusChangeCallback2(response) {
    console.log('statusChangeCallback2');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();

    } else if (response.status === 'not_authorized') {
      console.log('still not authorized!');

    } else {
      alert("not connected, not logged into facebook, we don't know");
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,about,education,family', function(response) {
     // console.log('Successful login for: ' + response.name);
      alert("hi");
      ////document.getElementById('status').innerHTML =
        //'Thanks for logging in, ' + response.name +" , gender " + response.gender + " and Family "+ response.family + " and " + response.friends +'!';
       // var familyMembers = JSON.parse(response.family);
        //for(var mem in familyMembers){
             //document.getElementById('status').innerHTML = familyMembers.name;
          //   alert(familyMembers.name);
      //  }

    });
  }

  $(document).ready(function() {
    FB.init({
      appId      : '1768031600132653',
      xfbml      : true,
      version    : 'v2.7'
    });
    checkLoginState();
  });