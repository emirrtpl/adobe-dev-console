(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7825],{79254:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return p}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),i=n(99536),l=["components"],o={},m={_frontmatter:o},s=i.Z;function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,d.mdx)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"oauth-20-authentication-and-authorization"},"OAuth 2.0 Authentication and Authorization"),(0,d.mdx)("p",null,"Adobe Cloud Platform APIs use the OAuth 2.0 protocol for authentication and authorization. Using Adobe OAuth 2.0, you can generate an access token using the ",(0,d.mdx)("a",{parentName:"p",href:"../OAuthIntegration.md"},"OAuth Integration")," created in ",(0,d.mdx)("a",{parentName:"p",href:"/adobe-dev-console/console"},"Adobe Developer Console")," which is used to make API calls from your web server or browser-based apps."),(0,d.mdx)("h2",{id:"basic-workflow-steps"},"Basic workflow steps"),(0,d.mdx)("p",null,"The basic web OAuth 2.0 workflow includes the following steps:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Your application ",(0,d.mdx)("em",{parentName:"li"},"redirects")," the user to Adobe along with the list of requested permissions."),(0,d.mdx)("li",{parentName:"ol"},"Adobe prompts the user with a login screen and informs the user of the requested permissions."),(0,d.mdx)("li",{parentName:"ol"},"The user decides whether to grant the permissions."),(0,d.mdx)("li",{parentName:"ol"},"Adobe sends a ",(0,d.mdx)("em",{parentName:"li"},"callback")," to your application to notify whether the user granted the permissions."),(0,d.mdx)("li",{parentName:"ol"},"After permissions are granted, your application retrieves tokens required to make API requests on behalf of the user.")),(0,d.mdx)("p",null,"The process of providing secure access to protected resources has two stages, ",(0,d.mdx)("em",{parentName:"p"},"authorization")," and ",(0,d.mdx)("em",{parentName:"p"},"authentication"),". It is important to understand that they are separate concepts:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Authorization")," is the process of granting permission to a user to access a protected resource. Because authentication is usually a prerequisite for granting access, these two terms often occur together."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Authentication")," is the process of determining that a user is who they claim to be. Authentication can be checked by Adobe","’","s own identity provider, the Identity Management Services (IMS).")),(0,d.mdx)("h2",{id:"discovery"},"Discovery"),(0,d.mdx)("p",null,"A discovery endpoint is provided to view details of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"openid")," configuration: "),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://ims-na1.adobelogin.com/ims/.well-known/openid-configuration"},(0,d.mdx)("inlineCode",{parentName:"a"},"https://ims-na1.adobelogin.com/ims/.well-known/openid-configuration"))),(0,d.mdx)("p",null,"The Keys with which ID Tokens are signed can be found here: ",(0,d.mdx)("a",{parentName:"p",href:"https://ims-na1.adobelogin.com/ims/keys"},(0,d.mdx)("inlineCode",{parentName:"a"},"https://ims-na1.adobelogin.com/ims/keys"))),(0,d.mdx)("h2",{id:"authorization"},"Authorization"),(0,d.mdx)("p",null,"The first step is to request the authorization token. This request sets the access scope and asks the user to grant permission to your application. To start this workflow, redirect the user to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"authorize")," endpoint: "),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/authorize/v2")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," Ensure that you are using the latest version (",(0,d.mdx)("inlineCode",{parentName:"p"},"v2"),") of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/authorize")," endpoint."),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The client ID obtained from ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"redirect_uri")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The URI to which the user agent is redirected once the authorization completes. Note that this URI must be HTTPS. The pattern is validated against the list of valid redirect URIs configured for your client. If the redirect URI is not provided with the request or it does not validate against the allowed redirects, it will consider the Default Redirect URI in Adobe Developer Console.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"scope")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The scope of the access request, expressed as a list of splace or comma delimited, case-sensitive strings. See the ",(0,d.mdx)("a",{parentName:"td",href:"Scopes.md"},"OAuth 2.0 Scopes reference document")," for more information.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"response_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Possible values are ",(0,d.mdx)("inlineCode",{parentName:"td"},"code"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"token"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"id_token"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"id_token token"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"code id_token"),". The default response type for the Authorization code flow is ",(0,d.mdx)("inlineCode",{parentName:"td"},"code"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"state")),(0,d.mdx)("td",{parentName:"tr",align:null},"Recommended"),(0,d.mdx)("td",{parentName:"tr",align:null},"Client-defined state data that is replayed back to the client. It must not be longer than 4096 characters. Does not need to be json. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"nonce")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"String value used to associate a Client session with an ID Token and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"prompt")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Space delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for authentication or redirects back if the user is not authenticated. Supported values: ",(0,d.mdx)("inlineCode",{parentName:"td"},"none"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"login"),".",(0,d.mdx)("br",null),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"none → Does not show any UI. Either returns successfully with a valid authentication response or returns with an error.",(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"error=login_required → No user is logged in."),(0,d.mdx)("li",null,"error=consent_required → User is Logged in, but has not consented to your app."),(0,d.mdx)("li",null,"error=interaction_required → User is logged in, has given consent, but there is some other action they needs to perform (accept terms of use, etc.)."))),(0,d.mdx)("li",null,"login → Even if the user is authenticated, they will see the login screen.")))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes, for Public Clients"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge")," value depends on ",(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge_method")," (see next line).")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge_method")),(0,d.mdx)("td",{parentName:"tr",align:null},"No, default to ",(0,d.mdx)("inlineCode",{parentName:"td"},"plain")),(0,d.mdx)("td",{parentName:"tr",align:null},"Possible values: ",(0,d.mdx)("inlineCode",{parentName:"td"},"S256"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"plain"),(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"For ",(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge_method")," = ",(0,d.mdx)("inlineCode",{parentName:"td"},"plain")),(0,d.mdx)("li",null,(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge")," = ",(0,d.mdx)("inlineCode",{parentName:"td"},"code_verifier")),(0,d.mdx)("li",null,"For ",(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge_method")," = ",(0,d.mdx)("inlineCode",{parentName:"td"},"S256")),(0,d.mdx)("li",null,(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge")," =  ",(0,d.mdx)("inlineCode",{parentName:"td"},"BASE64(SHA256(code_verifier))")),(0,d.mdx)("li",null,(0,d.mdx)("inlineCode",{parentName:"td"},"code_verifier")," is sent on the ",(0,d.mdx)("inlineCode",{parentName:"td"},"/token")," endpoint.")),(0,d.mdx)("br",null),(0,d.mdx)("br",null),"For more information, read the ",(0,d.mdx)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7636"},"Proof Key for Code Exchange by OAuth Public Clients")," documentation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"response_mode")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Possible values: ",(0,d.mdx)("inlineCode",{parentName:"td"},"query"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"fragment"),". ",(0,d.mdx)("br",null),"For more information, refer to this ",(0,d.mdx)("a",{parentName:"td",href:"https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes"},"openid documentation"),".",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"If ",(0,d.mdx)("inlineCode",{parentName:"td"},"response_mode")," is not specified, the following defaults are applied:",(0,d.mdx)("br",null),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"code → query"),(0,d.mdx)("li",null,"token → fragment"),(0,d.mdx)("li",null,"id_token → fragment"),(0,d.mdx)("li",null,"id_token token → fragment"),(0,d.mdx)("li",null,"code id_token → fragment")))))),(0,d.mdx)("h4",{id:"sample-request-path"},"Sample request path"),(0,d.mdx)("p",null,"The following request path provides an example of several parameters:  "),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"https://ims-na1.adobelogin.com/ims/authorize/v2?client_id={CLIENT_ID}\n&redirect_uri=https://www.myapp.com/OAuth/callback&scope=openid&state={STATE}&response_type=code\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," The path has been split onto two lines for readability. A complete request path includes multiple parameters separated by an ampersand (",(0,d.mdx)("inlineCode",{parentName:"p"},"&"),") with no spaces or line breaks."),(0,d.mdx)("h4",{id:"prompting-the-user-for-consent"},"Prompting the user for consent"),(0,d.mdx)("p",null,"Once the request from the previous step is sent, Adobe will redirect the user to the Adobe ID sign-in page. After sign-in, the user will be shown a consent window that includes the name of your application and the information that your application is requesting permission to access. The user can then allow or deny access."),(0,d.mdx)("h4",{id:"successful-response"},"Successful response"),(0,d.mdx)("p",null,"After the user has authenticated and been granted consent to your application, the user agent will be redirected to ",(0,d.mdx)("inlineCode",{parentName:"p"},"{YOUR_REDIRECT_URI}")," with parameters determined by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"response_type")," sent in the request."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Response Type (",(0,d.mdx)("inlineCode",{parentName:"th"},"response_type"),")"),(0,d.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"token")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token={ACCESS_TOKEN}&state={STATE}&token_type=bearer&expires_in=86399")," ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,(0,d.mdx)("inlineCode",{parentName:"td"},"token_type")," will always be ",(0,d.mdx)("inlineCode",{parentName:"td"},"bearer"),"."),(0,d.mdx)("li",null,(0,d.mdx)("inlineCode",{parentName:"td"},"expires_in")," is the validity of the token in seconds.")))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code={AUTHORIZATION_CODE}&state={STATE}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token={ID_TOKEN}&state={STATE}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token token")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token={ID_TOKEN}&access_token={ACCESS_TOKEN}&state={STATE}&token_type=bearer&expires_in=86399"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code id_token")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token={ID_TOKEN}&code={AUTHORIZATION_CODE}&state={STATE}"))))),(0,d.mdx)("p",null,"The parameters will be in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"query")," or the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fragment"),", according to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"response_mode")," parameter included in the request. If a ",(0,d.mdx)("inlineCode",{parentName:"p"},"response_mode")," is not specified, the default values are used as shown in the ",(0,d.mdx)("a",{parentName:"p",href:"#authorization"},"Authorization parameters table"),"."),(0,d.mdx)("h2",{id:"access-tokens"},"Access tokens"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"/token")," endpoint is used for exchanging both the Authorization Code and refresh tokens. These steps are outlined in the following sections:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#exchanging-the-authorization-code"},"Exchanging the Authorization Code")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#exchanging-refresh-tokens"},"Exchanging refresh tokens"))),(0,d.mdx)("h3",{id:"exchanging-the-authorization-code"},"Exchanging the Authorization Code"),(0,d.mdx)("p",null,"After receiving the authorization code, send a POST request to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/token")," endpoint:  "),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/token/v3")),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("p",null,"Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Only for PUBLIC clients"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Client ID obtained from the ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The base64-encoded ",(0,d.mdx)("inlineCode",{parentName:"td"},"authorization_code")," returned from the ",(0,d.mdx)("inlineCode",{parentName:"td"},"/ims/authorize/")," request in callback.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"grant_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"Value should always be ",(0,d.mdx)("inlineCode",{parentName:"td"},"authorization_code"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"code_verifier")),(0,d.mdx)("td",{parentName:"tr",align:null},"Only for PUBLIC clients"),(0,d.mdx)("td",{parentName:"tr",align:null},"Code verifier generated for the ",(0,d.mdx)("inlineCode",{parentName:"td"},"code_challenge")," sent during ",(0,d.mdx)("a",{parentName:"td",href:"#authorization"},"Authorization"),".")))),(0,d.mdx)("h4",{id:"authorization-by-client-type"},"Authorization by client type"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Client Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Authorization"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Confidential"),(0,d.mdx)("td",{parentName:"tr",align:null},"Basic Authorization header.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"Authorization: Basic Base64(clientId:clientSecret)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Public"),(0,d.mdx)("td",{parentName:"tr",align:null},"Client Id passed as parameter.")))),(0,d.mdx)("h4",{id:"request-for-confidential-client"},"Request for confidential client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/token/v3 \\\n  -H 'Authorization: Basic {AUTHORIZATION}' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code'\n")),(0,d.mdx)("h4",{id:"request-for-public-client"},"Request for PUBLIC client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID} \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code&code_verifier={GENERATED_CODE_VERIFIER}'\n")),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "{ACCESS_TOKEN}",\n    "refresh_token": "{REFRESH_TOKEN}",\n    "sub": "B0DC108C5CD449CA0A494133@c62f24cc5b5b7e0e0a494004",\n    "id_token": "{ID_TOKEN}",\n    "token_type": "bearer",\n    "expires_in": 86399\n}\n')),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Property"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Generated access token")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"refresh_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Generated refresh token.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"offline_access")," scope is needed for this to be returned. See the ",(0,d.mdx)("a",{parentName:"td",href:"Scopes.md"},"OAuth 2.0 Scopes reference document")," for more information.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"token_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Token type will always be ",(0,d.mdx)("inlineCode",{parentName:"td"},"bearer"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Generated ID token.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"Present if ",(0,d.mdx)("inlineCode",{parentName:"td"},"openid")," is added as scope. See the ",(0,d.mdx)("a",{parentName:"td",href:"Scopes.md"},"OAuth 2.0 Scopes reference document")," for more information.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"expires_in")),(0,d.mdx)("td",{parentName:"tr",align:null},"Validity of access token in seconds.")))),(0,d.mdx)("h3",{id:"exchanging-refresh-tokens"},"Exchanging refresh tokens"),(0,d.mdx)("p",null,"The default expiry for access tokens is 24 hours. You can refresh an access token without prompting the user for permission again, even if a user is not present. The refresh token, by default, expires in 2 weeks."),(0,d.mdx)("p",null,"This can be done by sending a POST request to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/token")," endpoint:"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/token/v3")),(0,d.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mandatory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Only for PUBLIC clients"),(0,d.mdx)("td",{parentName:"tr",align:null},"The client ID obtained from ",(0,d.mdx)("a",{parentName:"td",href:"/adobe-dev-console/console"},"Adobe Developer Console"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"refresh_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The base64-encoded refresh token received in the response to the initial request for an access token.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"grant_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The value is always ",(0,d.mdx)("inlineCode",{parentName:"td"},"refresh_token"),".")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," Not all product APIs support the ",(0,d.mdx)("inlineCode",{parentName:"p"},"refresh_token")," grant type. You may not be able to get a valid response for such integrations. Please try creating a ",(0,d.mdx)("strong",{parentName:"p"},"Service Account Integration")," for such APIs to create a service-service integration."),(0,d.mdx)("h4",{id:"authorization-by-client-type-1"},"Authorization by client type"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Client Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Authorization"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Confidential"),(0,d.mdx)("td",{parentName:"tr",align:null},"Basic Authorization header.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"Authorization: Basic Base64(clientId:clientSecret)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Public"),(0,d.mdx)("td",{parentName:"tr",align:null},"Client ID passed as parameter.")))),(0,d.mdx)("h4",{id:"request-for-confidential-client-1"},"Request for confidential client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/token/v3 \\\n  -H 'Authorization: Basic {AUTHORIZATION}' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'grant_type=refresh_token&refresh_token={REFRESH_TOKEN}'\n")),(0,d.mdx)("h4",{id:"request-for-public-client-1"},"Request for PUBLIC client"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID} \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'grant_type=refresh_token&refresh_token={REFRESH_TOKEN}'\n")),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "{ACCESS_TOKEN}",\n    "refresh_token": "{REFRESH_TOKEN}",\n    "token_type": "bearer",\n    "expires_in": 86399\n}\n')),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Property"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"access_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Generated access token")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"refresh_token")),(0,d.mdx)("td",{parentName:"tr",align:null},"Generated refresh token.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"offline_access")," scope is needed for this to be returned. See the ",(0,d.mdx)("a",{parentName:"td",href:"Scopes.md"},"OAuth 2.0 Scopes reference document")," for more information.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"token_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Token type will always be ",(0,d.mdx)("inlineCode",{parentName:"td"},"bearer"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"expires_in")),(0,d.mdx)("td",{parentName:"tr",align:null},"Validity of access token in seconds.")))),(0,d.mdx)("h2",{id:"revoking-authorization-for-end-user"},"Revoking authorization for end user"),(0,d.mdx)("p",null,"Users can revoke access to your application themselves by visiting the ",(0,d.mdx)("a",{parentName:"p",href:"https://accounts.adobe.com/security/connected-applications#"},"Connected Applications")," page. The next time the user launches your application, the authorization workflow will start from the beginning."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-authentication-o-auth-index-md-55f703fcffa0dcbb74ce.js.map