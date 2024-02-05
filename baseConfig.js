var date = new Date();
var vccd = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const testConfig =
{
      "Project": "Ideega UI Automation",
      "Env":"Main",
      "Language":"",
      "elementFinderURL":"https://colorlib.com/etc/regform/colorlib-regform-36/",
      //Mail COnfigurations
      "FromMailaddress": "udgo.sabbir@gmail.com",
      "FromAddressPassword": "",
      "ToMailAddress": ["sabbir.of@gmail.com"],
      "TeamsWebhookURL": "",
      "MailServiceProvider": "Gmail",
      "MailNotification": "yes",
      "TeamsNotification": "yes",
      "Githubreportlink": ""
}

module.exports = { testConfig }