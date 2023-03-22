/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
		case 'subscribe':
          data = {
            pageNum: 9000,
            content: subscribe()
          };
          	break;
		case 'sa':
			data = {
				pageNum: 9,
				content: agreements()
			};
			break;
		case 'faq':
			data = {
				pageNum: 8,
				content: faq()
			};
			break;
		case 'services':
			data = {
				pageNum: 7,
				content: services()
			};
			break;
        case 'about':
        default:
            data = {
                pageNum: 6,
                content: about()
            };
            break;
        }
    return data;
}

function subscribe(){
	return `
	  <div style="position: relative;text-align:center;margin-left:auto;margin-right:auto; padding-top:10px; padding-bottom:10px;">
		<iframe style="width:100%; max-width:600px; margin-top:25px; margin-bottom:25px; min-height:300px; max-height:500px;" data-w-type="embedded" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://0wjuo.mjt.lu/wgt/0wjuo/pgs/form?c=9eddde35" height="390px"></iframe>
	  </div>
	  <script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>
	`;
  }

function agreements(){
	return `
		<section id="maincontent">
			<div class="container">
				<div class="row">
					<div class="span12">
						<h2>
							TERMS OF SERVICE AGREEMENT
						</h2>
						<h3>
							Blazed Software Interactive
						</h3>
						<p>
							Updated: 3/21/2023
						</p>
						<hr />
						<h3>
							AGREEMENT TO TERMS
						</h3>

						<p>
							These Terms of Service constitute a legally binding agreement made between you,
							whether personally or on behalf of an entity ("you") and [Blazed Labs LLC] ("we," "us"
							or "our"), concerning your access to and use of the [blz.one, blazed.space, blazed.dev, 
								blazed.software, blazed.systems, blazed.tel, blazed.quest, blazed.xyz] website as well as any
							other media form, media channel, mobile website or mobile application related, linked,
							or otherwise connected thereto (collectively, the "Site").
						</p>

						<p>
							You agree that by accessing the Site, you have read, understood, and agree to be
							bound by all of these Terms of Service. If you do not agree with all of these Terms of
							Service, then you are expressly prohibited from using the Site and you must discontinue
							use immediately
						</p>

						<p>
							Supplemental Terms of Service or documents that may be posted on the Site from time
							to time are hereby expressly incorporated herein by reference. We reserve the right, in
							our sole discretion, to make changes or modifications to these Terms of Service at any
							time and for any reason.
						</p>

						<p>
							We will alert you about any changes by updating the "Last updated" date of these Terms
							of Service, and you waive any right to receive specific notice of each such change.					
						</p>

						<p>
							It is your responsibility to periodically review these Terms of Service to stay informed of
							updates. You will be subject to, and will be deemed to have been made aware of and to
							have accepted, the changes in any revised Terms of Service by your continued use of
							the Site after the date such revised Terms of Service are posted.
						</p>

						<p>
							The information provided on the Site is not intended for distribution to or use by any
							person or entity in any jurisdiction or country where such distribution or use would be
							contrary to law or regulation or which would subject us to any registration requirement
							within such jurisdiction or country.
						</p>

						<p>
							Accordingly, those persons who choose to access the Site from other locations do so on
							their own initiative and are solely responsible for compliance with local laws, if and to
							the extent local laws are applicable.					
						</p>

						<p>
							The Site is intended for users who are at least 18 years old. Persons under
							the age of 18 are not permitted to register for the Site.
						</p>

						<h3>
							INTELLECTUAL PROPERTY RIGHTS
						</h3>

						<p>
							Unless otherwise indicated, the Site is our proprietary property and all source code,
							databases, functionality, software, website designs, audio, video, text, photographs, and
							graphics on the Site (collectively, the "Content") and the trademarks, service marks, and
							logos contained therein (the "Marks") are owned or controlled by us or licensed to us,
							and are protected by copyright and trademark laws and various other intellectual
							property rights and unfair competition laws of the United States, foreign jurisdictions,
							and international conventions.
						</p>

						<p>
							The Content and the Marks are provided on the Site "AS IS" for your information and
							personal use only. Except as expressly provided in these Terms of Service, no part of
							the Site and no Content or Marks may be copied, reproduced, aggregated, republished, 
							uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
							licensed, or otherwise exploited for any commercial purpose whatsoever, without our
							express prior written permission
						</p>

						<p>
							Provided that you are eligible to use the Site, you are granted a limited license to
							access and use the Site and to download or print a copy of any portion of the Content to
							which you have properly gained access solely for your personal, non-commercial use.
							We reserve all rights not expressly granted to you in and to the Site, the Content and
							the Marks.					
						</p>

						<h3>
							USER REPRESENTATIONS
						</h3>
						<p>
							<b>By using the Site, you represent and warrant that:</b> <br />
							<i>
								[(1) all registration information you submit will be true, accurate, current, and complete; <br />
								(2) you will maintain the accuracy of such information and promptly update such
								registration information as necessary;] <br />
								(3) you have the legal capacity and you agree to comply with these Terms of Service; <br />
								[(4) you are not under the age of 18;] <br />
								(5) not a minor in the jurisdiction in which you reside[, or if a minor, you have received
									parental permission to use the Site]; <br />
								(6) you will not access the Site through automated or non-human means, whether
								through a bot, script, or otherwise (unless otherwise expressly permitted by Blazed Labs LLC); <br />
								(7) you will not use the Site for any illegal or unauthorized purpose;<br />
								(8) your use of the Site will not violate any applicable law or regulation.
							</i>
							If you provide any information that is untrue, inaccurate, not current, or incomplete, we
							have the right to suspend or terminate your account and refuse any and all current or
							future use of the Site (or any portion thereof).
						</p>

						<h3>
							USER REGISTRATION
						</h3>

						<p>
							You may be required to register with the Site. You agree to keep your password
							confidential and will be responsible for all use of your account and password. We
							reserve the right to remove, reclaim, or change a username you select if we determine,
							in our sole discretion, that such username is inappropriate, obscene, or otherwise
							objectionable.
						</p>
						
						<h3>
							PROHIBITED ACTIVITIES
						</h3>

						<p>
							You may not access or use the Site for any purpose other than that for which we make
							the Site available. The Site may not be used in connection with any commercial
							endeavors except those that are specifically endorsed or approved by us.
						</p>

						<br />

						<p>
							<b>
								As a user of the Site, you agree not to:
							</b>
						</p>

						<ol>
							<li>
								Systematically retrieve data or other content from the Site to create or compile,
								directly or indirectly, a collection, compilation, database, or directory without written
								permission from us.
							</li>
							<li>
								Make any unauthorized use of the Site, including collecting usernames and/or
								email addresses of users by electronic or other means for the purpose of sending
								unsolicited email, or creating user accounts by automated means or under false
								pretenses.
							</li>
							<li>
								Use a buying agent or purchasing agent to make purchases on the Site.
							</li>
							<li>
								Use the Site to advertise or offer to sell goods and services (unless otherwise permitted by Blazed Labs LLC).
							</li>
							<li>
								Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or
								enforce limitations on the use of the Site and/or the Content contained therein.
							</li>
							<li>
								Engage in unauthorized framing of or linking to the Site.
							</li>
							<li>
								Trick, defraud, or mislead us and other users, especially in any attempt to learn
								sensitive account information such as user passwords;
							</li>
							<li>
								Make improper use of our support services or submit false reports of abuse or
								misconduct.
							</li>
							<li>
								Engage in any automated use of the system, such as using scripts to send
								comments or messages, or using any data mining, robots, or similar data
								gathering and extraction tools.
							</li>
							<li>
								Interfere with, disrupt, or create an undue burden on the Site or the networks or
								services connected to the Site.
							</li>
							<li>
								Attempt to impersonate another user or person or use the username of another
								user.
							</li>
							<li>
								Sell or otherwise transfer your profile.
							</li>
							<li>
								Use any information obtained from the Site in order to harass, abuse, or harm
								another person.
							</li>
							<li>
								Use the Site as part of any effort to compete with us or otherwise use the Site
								and/or the Content for any revenue-generating endeavor or commercial enterprise.
							</li>
							<li>
								Decipher, decompile, disassemble, or reverse engineer any of the software
								comprising or in any way making up a part of the Site.
							</li>
							<li>
								Attempt to bypass any measures of the Site designed to prevent or restrict access
								to the Site, or any portion of the Site.
							</li>
							<li>
								Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
								providing any portion of the Site to you.
							</li>
							<li>
								Delete the copyright or other proprietary rights notice from any Content.
							</li>
							<li>
								copy or adapt the Site's software, including but not limited to Flash, PHP, HTML,
								JavaScript, or other code.
							</li>
							<li>
								Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
								other material, including excessive use of capital letters and spamming
								(continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes
								with the use, features, functions, operation, or maintenance of the Site.
							</li>
							<li>
								Upload or transmit (or attempt to upload or to transmit) any material that acts as a
								passive or active information collection or transmission mechanism, including
								without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web
								bugs, cookies, or other similar devices (sometimes referred to as "spyware" or
								"passive collection mechanisms" or "pcms").
							</li>
							<li>
								Except as may be the result of standard search engine or Internet browser usage,
								use, launch, develop, or distribute any automated system, including without
								limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses
								the Site, or using or launching any unauthorized script or other software.						
							</li>
							<li>
								Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
							</li>
							<li>
								Use the Site in a manner inconsistent with any applicable laws or regulations.
							</li>
							<li>
								Enguage or conspire to enguage in the counterfeit manufacure, distribution, sale, and/or circulation of Blazed Cash (B$).
							</li>
							<li>
								Enguage in any activity not consistent with the <a href="https://github.com/blazed-labs/blazed-labs/blob/main/law/CONSTITUTION.md" target="_blank">Blazed National Constitution</a>,
								while controlling a Blazed World player and/or while interacting with other Blazed World players and entities.
							</li>
							<li>
								Claim to be in ownership of Blazed World property, without official proof of ownership.
							</li>
						</ol>
						<h3>
							USER GENERATED CONTRIBUTIONS
						</h3>
						<p>
							The Site may invite you to chat, contribute to, or participate in blogs, message boards,
							online forums, and other functionality, and may provide you with the opportunity to
							create, submit, post, display, transmit, perform, publish, distribute, or broadcast content
							and materials to us or on the Site, including but not limited to text, writings, video, audio,
							photographs, graphics, comments, suggestions, or personal information or other
							material (collectively, "Contributions").					
						</p>
						<p>
							Contributions may be viewable by other users of the Site and through third-party
							websites. As such, any Contributions you transmit may be treated as non-confidential
							and non-proprietary. When you create or make available any Contributions, you thereby
							represent and warrant that:
						</p>
						<ol>
							<li>
								The creation, distribution, transmission, public display, or performance, and the
								accessing, downloading, or copying of your Contributions do not and will not
								infringe the proprietary rights, including but not limited to the copyright, patent,
								trademark, trade secret, or moral rights of any third party.
							</li>
							<li>
								You are the creator and owner of or have the necessary licenses, rights, consents,
								releases, and permissions to use and to authorize us, the Site, and other users of
								the Site to use your Contributions in any manner contemplated by the Site and
								these Terms of Service.
							</li>
							<li>
								You have the written consent, release, and/or permission of each and every
								identifiable individual person in your Contributions to use the name or likeness of
								each and every such identifiable individual person to enable inclusion and use of
								your Contributions in any manner contemplated by the Site and these Terms of
								Service.
							</li>
							<li>
								Your Contributions are not false, inaccurate, or misleading
							</li>
							<li>
								Your Contributions are not unsolicited or unauthorized advertising, promotional
								materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of
								solicitation.						
							</li>
							<li>
								Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
								libelous, slanderous, or otherwise objectionable (as determined by us).
							</li>
							<li>
								Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
							</li>
							<li>
								Your Contributions do not advocate the violent overthrow of any government or
								incite, encourage, or threaten physical harm against another.
							</li>
							<li>
								Your Contributions do not violate any applicable law, regulation, or rule.
							</li>
							<li>
								Your Contributions do not violate the privacy or publicity rights of any third party.
							</li>
							<li>
								Your Contributions do not contain any material that solicits personal information
								from anyone under the age of 18 or exploits people under the age of 18 in a sexual
								or violent manner.
							</li>
							<li>
								Your Contributions do not violate any federal or state law concerning child
								pornography, or otherwise intended to protect the health or well-being of minors;
							</li>
							<li>
								Your Contributions do not include any offensive comments that are connected to
								race, national origin, gender, sexual preference, or physical handicap.
							</li>
							<li>
								Your Contributions do not otherwise violate, or link to material that violates, any
								provision of these Terms of Service, or any applicable law or regulation
							</li>
						</ol>
						<p>
							Any use of the Site in violation of the foregoing violates these Terms of Service and may
							result in, among other things, termination or suspension of your rights to use the Site.					
						</p>
						<h3>
							CONTRIBUTION LICENSE
						</h3>
						<p>
							By posting your Contributions to any part of the Site [or making Contributions accessible
							to the Site by linking your account from the Site to any of your social networking
							accounts], you automatically grant, and you represent and warrant that you have the
							right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive,
							transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy,
							reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache,
							publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in
							part), and distribute such Contributions (including, without limitation, your image and
							voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative
							works of, or incorporate into other works, such Contributions, and grant and authorize
							sublicenses of the foregoing. The use and distribution may occur in any media formats
							and through any media channels.
						</p>
						<p>
							This license will apply to any form, media, or technology now known or hereafter
							developed, and includes our use of your name, company name, and franchise name, as
							applicable, and any of the trademarks, service marks, trade names, logos, and personal
							and commercial images you provide. You waive all moral rights in your Contributions,
							and you warrant that moral rights have not otherwise been asserted in your
							Contributions.					
						</p>
						<p>
							We do not assert any ownership over your Contributions. You retain full ownership of all
							of your Contributions and any intellectual property rights or other proprietary rights
							associated with your Contributions. We are not liable for any statements or representations 
							in your Contributions provided by you in any area on the Site.
						</p>
						<p>
							You are solely responsible for your Contributions to the Site and you expressly agree to
							exonerate us from any and all responsibility and to refrain from any legal action against
							us regarding your Contributions.
						</p>
						<p>
							We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise
							change any Contributions; (2) to re-categorize any Contributions to place them in more
							appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at
							any time and for any reason, without notice. We have no obligation to monitor your
							Contributions.					
						</p>
						<h3>
							GUIDELINES FOR REVIEWS
						</h3>
						<p>
							We may provide you areas on the Site to leave reviews or ratings. 
							When posting a review, you must comply with the following criteria:
						</p>
						<ol>
							<li>
								You should have firsthand experience with the person/entity being reviewed;
							</li>
							<li>
								Your reviews should not contain offensive profanity, or abusive, racist, offensive, or
								hate language;
							</li>
							<li>
								Your reviews should not contain discriminatory references based on religion, race,
								gender, national origin, age, marital status, sexual orientation, or disability;
							</li>
							<li>
								Your reviews should not contain references to illegal activity;
							</li>
							<li>
								You should not be affiliated with competitors if posting negative reviews;
							</li>
							<li>
								You should not make any conclusions as to the legality of conduct;
							</li>
							<li>
								You may not post any false or misleading statements;
							</li>
							<li>
								You may not organize a campaign encouraging others to post reviews, whether
								positive or negative.
							</li>
						</ol>
						<p>
							We may accept, reject, or remove reviews in our sole discretion. We have absolutely no
							obligation to screen reviews or to delete reviews, even if anyone considers reviews
							objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily
							represent our opinions or the views of any of our affiliates or partners.
						</p>
						<p>
							We do not assume liability for any review or for any claims, liabilities, or losses resulting
							from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive,
							worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to
							reproduce, modify, translate, transmit by any means, display, perform, and/or distribute
							all content relating to reviews.					
						</p>
						<h3>
							MOBILE APPLICATION LICENSE
						</h3>
						<h4>
							Use License
						</h4>
						<p>
							If you access the Site via a mobile application, then we grant you a revocable,
							non-exclusive, non-transferable, limited right to install and use the mobile application on
							wireless electronic devices owned or controlled by you, and to access and use the
							mobile application on such devices strictly in accordance with the Terms of Service of
							this mobile application license contained in these Terms of Service. 
							<br />
							<b>You shall not:</b>
						</p>
						<ol>
							<li>
								Decompile, reverse engineer, disassemble, attempt to derive the source code of, or
								decrypt the application;						
							</li>
							<li>
								Make any unnaproved modification (without "forking" and changing the name), adaptation, improvement, enhancement, translation, or derivative work from the application;
							</li>
							<li>
								Remove, alter, or obscure any proprietary notice (including any notice of copyright or
								trademark) posted by us or the licensors of the application;
							</li>
							<li>
								Use the application for any revenue generating endeavor, commercial enterprise, or
								other purpose for which it is not designed or intended (unless permitted to do so by the
								Blazed Labs LLC company and/or the Blazed National Government);
							</li>
							<li>
								Make the application available over a network or other environment permitting
								access or use by multiple devices or users at the same time;
							</li>
							<li>
								Use the application for creating a product, service, or software that is, directly or
								indirectly, competitive with or in any way a substitute for the application;
							</li>
							<li>
								Use the application to send automated queries to any website or to send any
								unsolicited commercial e-mail;
							</li>
							<li>
								Use any proprietary information or any of our interfaces or our other intellectual
								property in the design, development, manufacture, licensing, or distribution of any
								applications, accessories, or devices for use with the application.						
							</li>
						</ol>
						<h3>
							Apple and Android Devices
						</h3>
						<p>
							The following terms apply when you use a mobile application obtained from either the
							Apple Store or Google Play (each an "App Distributor") to access the Site:						
						</p>
						<ol>
							<li>
								The license granted to you for our mobile application is limited to a non-transferable
								license to use the application on a device that utilizes the Apple iOS or Android
								operating systems, as applicable, and in accordance with the usage rules set forth in
								the applicable App Distributor's Terms of Service;
							</li>

							<li>
								We are responsible for providing any maintenance and support services with respect
								to the mobile application as specified in the Terms of Service of this mobile application
								license contained in these Terms of Service or as otherwise required under applicable
								law, and you acknowledge that each App Distributor has no obligation whatsoever to
								furnish any maintenance and support services with respect to the mobile application;							
							</li>

							<li>
								In the event of any failure of the mobile application to conform to any applicable
								warranty, you may notify the applicable App Distributor, and the App Distributor, in
								accordance with its terms and policies, may refund the purchase price, if any, paid for
								the mobile application, and to the maximum extent permitted by applicable law, the App
								Distributor will have no other warranty obligation whatsoever with respect to the mobile
								application;			
							</li>

							<li>
								You represent and warrant that (i) you are not located in a country that is subject to a
								U.S. government embargo, or that has been designated by the U.S. government as a
								"terrorist supporting" country and (ii) you are not listed on any U.S. government list of
								prohibited or restricted parties;
							</li>

							<li>
								You must comply with applicable third-party terms of agreement when using the
								mobile application, e.g., if you have a VoIP application, then you must not be in violation
								of their wireless data service agreement when using the mobile application;							
							</li>

							<li>
								You acknowledge and agree that the App Distributors are third-party beneficiaries of
								the Terms of Service in this mobile application license contained in these Terms of
								Service, and that each App Distributor will have the right (and will be deemed to have
								accepted the right) to enforce the Terms of Service in this mobile application license
								contained in these Terms of Service against you as a third-party beneficiary thereof.
							</li>
						</ol>

						<h3>
							SOCIAL MEDIA
						</h3>
						<p>
							As part of the functionality of the Site, you may link your account with online accounts
							you have with third-party service providers (each such account, a "Third-Party Account")
							by either: (1) providing your Third-Party Account login information through the Site; or
							(2) allowing us to access your Third-Party Account, as is permitted under the applicable
							Terms of Service that govern your use of each Third-Party Account.
						</p>
						<p>
							You represent and warrant that you are entitled to disclose your Third-Party Account
							login information to us and/or grant us access to your Third-Party Account, without
							breach by you of any of the Terms of Service that govern your use of the applicable
							Third-Party Account, and without obligating us to pay any fees or making us subject to
							any usage limitations imposed by the third-party service provider of the Third-Party
							Account.
						</p>
						<p>
							By granting us access to any Third-Party Accounts, you understand that (1) we may
							access, make available, and store (if applicable) any content that you have provided to
							and stored in your Third-Party Account (the "Social Network Content") so that it is
							available on and through the Site via your account, including without limitation any
							friend lists and (2) we may submit to and receive from your Third-Party Account
							additional information to the extent you are notified when you link your account with the
							Third-Party Account.
						</p>
						<p>
							Depending on the Third-Party Accounts you choose and subject to the privacy settings
							that you have set in such Third-Party Accounts, personally identifiable information that
							you post to your Third-Party Accounts may be available on and through your account on
							the Site.
						</p>
						<p>
							Please note that if a Third-Party Account or associated service becomes unavailable or
							our access to such Third-Party Account is terminated by the third-party service provider,
							then Social Network Content may no longer be available on and through the Site. You will 
							have the ability to disable the connection between your account on the Site and your
							Third-Party Accounts at any time. <br />
							<b>PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE
							PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED
							SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE
							PROVIDERS.</b> <br />
							We make no effort to review any Social Network Content for any purpose, including but
							not limited to, for accuracy, legality, or non-infringement, and we are not responsible for
							any Social Network Content.
						</p>

						<p>
							You acknowledge and agree that we may access your email address book associated
							with a Third-Party Account and your contacts list stored on your mobile device or tablet
							computer solely for purposes of identifying and informing you of those contacts who
							have also registered to use the Site.		
						</p>

						<p>
							You can deactivate the connection between the Site and your Third-Party Account by
							contacting us using the contact information below or through your account settings (if
							applicable). We will attempt to delete any information stored on our servers that was
							obtained through such Third-Party Account, except the username and profile picture
							that become associated with your account.
						</p>

						<h3>
							SUBMISSIONS
						</h3>

						<p>
							You acknowledge and agree that any questions, comments, suggestions, ideas,
							feedback, or other information regarding the Site ("Submissions") provided by you to us
							are non-confidential and shall become our sole property. We shall own exclusive rights,
							including all intellectual property rights, and shall be entitled to the unrestricted use and
							dissemination of these Submissions for any lawful purpose, commercial or otherwise,
							without acknowledgment or compensation to you.
						</p>

						<p>
							You hereby waive all moral rights to any such Submissions, and you hereby warrant that
							any such Submissions are original with you or that you have the right to submit such
							Submissions. You agree there shall be no recourse against us for any alleged or actual
							infringement or misappropriation of any proprietary right in your Submissions.
						</p>

						<h3>
							THIRD-PARTY WEBSITES AND CONTENT
						</h3>
						
						<p>
							The Site may contain (or you may be sent via the Site) links to other websites
							("Third-Party Websites") as well as articles, photographs, text, graphics, pictures,
							designs, music, sound, video, information, applications, software, and other content or
							items belonging to or originating from third parties ("Third-Party Content").						
						</p>

						<p>
							Such Third-Party Websites and Third-Party Content are not investigated, monitored, or
							checked for accuracy, appropriateness, or completeness by us, and we are not
							responsible for any Third-Party Websites accessed through the Site or any Third-Party
							Content posted on, available through, or installed from the Site, including the content,
							accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or
							contained in the Third-Party Websites or the Third-Party Content.						
						</p>

						<p>
							Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites
							or any Third-Party Content does not imply approval or endorsement thereof by us. If you
							decide to leave the Site and access the Third-Party Websites or to use or install any
							Third-Party Content, you do so at your own risk, and you should be aware these Terms
							of Service no longer govern.						
						</p>

						<p>
							You should review the applicable terms and policies, including privacy and data
							gathering practices, of any website to which you navigate from the Site or relating to any
							applications you use or install from the Site. Any purchases you make through
							Third-Party Websites will be through other websites and from other companies, and we
							take no responsibility whatsoever in relation to such purchases which are exclusively
							between you and the applicable third party.
						</p>
						
						<p>
							You agree and acknowledge that we do not endorse the products or services offered on
							Third-Party Websites and you shall hold us harmless from any harm caused by your
							purchase of such products or services. Additionally, you shall hold us harmless from any
							losses sustained by you or harm caused to you relating to or resulting in any way from
							any Third-Party Content or any contact with Third-Party Websites.
						</p>

						<h3>
							ADVERTISERS
						</h3>
						<p>
							We allow advertisers to display their advertisements and other information in certain
							areas of the Site, such as sidebar advertisements or banner advertisements. If you are
							an advertiser, you shall take full responsibility for any advertisements you place on the
							Site and any services provided on the Site or products sold through those
							advertisements.
						</p>
						<p>
							Further, as an advertiser, you warrant and represent that you possess all rights and
							authority to place advertisements on the Site, including, but not limited to, intellectual
							property rights, publicity rights, and contractual rights.
						</p>
						<p>
							<i>[As an advertiser, you agree that such advertisements are subject to our Digital
								Millennium Copyright Act ("DMCA") Notice and Policy provisions as described below,
								and you understand and agree there will be no refund or other compensation for DMCA
								takedown-related issues.]</i> We simply provide the space to place such advertisements,
								and we have no other relationship with advertisers.
							
						</p>
						<h3>
							SITE MANAGEMENT
						</h3>
						<p>
							We reserve the right, but not the obligation, to:
						</p>
						<ol>
							<li>
								Monitor the Site for violations of these Terms of Service;
							</li>
							<li>
								Take appropriate legal action against anyone who, in our sole discretion, violates the
								law or these Terms of Service, including without limitation, reporting such user to law
								enforcement authorities;
							</li>
							<li>
								In our sole discretion and without limitation, refuse, restrict access to, limit the
								availability of, or disable (to the extent technologically feasible) any of your
								Contributions or any portion thereof;
							</li>
							<li>
								Otherwise manage the Site in a manner designed to protect our rights and property
								and to facilitate the proper functioning of the Site.						
							</li>
						</ol>
						<h3>
							PRIVACY POLICY
						</h3>
						<p>
							We care about data privacy and security. Please review our Privacy Policy <a target="_blank" href="https://blazed.sbs/assets/pdf/privacy.pdf">[CLICK
							HERE]</a>/posted on the Site]. By using the Site, you agree to be bound by our Privacy
							Policy, which is incorporated into these Terms of Service. Please be advised the Site is
							hosted in the United States.
						</p>
						<p>
							If you access the Site from the European Union, Asia, or any other region of the world
							with laws or other requirements governing personal data collection, use, or disclosure
							that differ from applicable laws in the United States, then through your continued use of
							the Site, you are transferring your data to the United States, and you expressly consent
							to have your data transferred to and processed in the United States
						</p>
						<p>
							<i>
								[Further, we do not knowingly accept, request, or solicit information from children or
								knowingly market to children. Therefore, in accordance with the U.S. Children's Online
								Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13
								has provided personal information to us without the requisite and verifiable parental
								consent, we will delete that information from the Site as quickly as is reasonably
								practical.]
							</i>
						</p>
						<h4>
							<b>DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY</b>
						</h4>
						<h5>
							<b>Notifications</b>
						</h5>
						<p>
							We respect the intellectual property rights of others. If you believe that any material
							available on or through the Site infringes upon any copyright you own or control, please
							immediately notify our Designated Copyright Agent using the contact information
							provided below (a "Notification").
						</p>
						<p>
							A copy of your Notification will be sent to the person who posted or stored the material
							addressed in the Notification. Please be advised that pursuant to federal law you may
							be held liable for damages if you make material misrepresentations in a Notification.
							Thus, if you are not sure that material located on or linked to by the Site infringes your
							copyright, you should consider first contacting an attorney.						
						</p>
						<p>
							<b>
								All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and
								include the following information:
							</b>
						</p>
						<ol>
							<li>
								A physical or electronic signature of a person authorized to act on behalf of the
								owner of an exclusive right that is allegedly infringed;
							</li>
							<li>
								Identification of the copyrighted work claimed to have been infringed, or, if multiple
								copyrighted works on the Site are covered by the Notification, a representative list of
								such works on the Site;
							</li>
							<li>
								Identification of the material that is claimed to be infringing or to be the subject of
								infringing activity and that is to be removed or access to which is to be disabled, and
								information reasonably sufficient to permit us to locate the material;
							</li>
							<li>
								Information reasonably sufficient to permit us to contact the complaining party, such
								as an address, telephone number, and, if available, an email address at which the
								complaining party may be contacted;
							</li>
							<li>
								A statement that the complaining party has a good faith belief that use of the material
								in the manner complained of is not authorized by the copyright owner, its agent, or the
								law;
							</li>
							<li>
								A statement that the information in the notification is accurate, and under penalty of
								perjury, that the complaining party is authorized to act on behalf of the owner of an
								exclusive right that is allegedly infringed upon.							
							</li>
						</ol>
						<h5>
							<b>Counter Notification</b>
						</h5>
						<p>
							If you believe your own copyrighted material has been removed from the Site as a result
							of a mistake or misidentification, you may submit a written counter notification to [us/our
							Designated Copyright Agent] using the contact information provided below (a "Counter
							Notification").
						</p>
						<p>
							To be an effective Counter Notification under the DMCA, your Counter Notification must
							include substantially the following:						
						</p>
						<ol>
							<li>
								Identification of the material that has been removed or disabled and the location at
								which the material appeared before it was removed or disabled;
							</li>
							<li>
								A statement that you consent to the jurisdiction of the Federal District Court in which
								your address is located, or if your address is outside the United States, for any judicial
								district in which we are located;
							</li>
							<li>
								A statement that you will accept service of process from the party that filed the
								Notification or the party's agent;							
							</li>
							<li>
								Your name, address, and telephone number;
							</li>
							<li>
								A statement under penalty of perjury that you have a good faith belief that the
								material in question was removed or disabled as a result of a mistake or
								misidentification of the material to be removed or disabled;							
							</li>
							<li>
								Your physical or electronic signature.
							</li>
						</ol>
						<p>
							If you send us a valid, written Counter Notification meeting the requirements described
							above, we will restore your removed or disabled material, unless we first receive notice
							from the party filing the Notification informing us that such party has filed a court action
							to restrain you from engaging in infringing activity related to the material in question.				
						</p>
						<p>
							Please note that if you materially misrepresent that the disabled or removed content
							was removed by mistake or misidentification, you may be liable for damages, including
							costs and attorney's fees. Filing a false Counter Notification constitutes perjury.					
						</p>
						<h5>
							<b>Designated Copyright Agent</b>
						</h5>
						<p>
							Tyler Ruff <br />
							Attn: Copyright Agent
						</p>
						<address>
							1650 Simpson Ave <br />
							Ocean City, NJ 08226
						</address>
						<p>
							<a href="mailto:dmca@blazed.company">dmca@blazed.company</a>
						</p>
						<h3>
							COPYRIGHT INFRINGEMENTS
						</h3>
						<p>
							We respect the intellectual property rights of others. If you believe that any material
							available on or through the Site infringes upon any copyright you own or control, please
							immediately notify us using the contact information provided below (a "Notification"). A
							copy of your Notification will be sent to the person who posted or stored the material
							addressed in the Notification.
						</p>
						<h3>
							TERM AND TERMINATION
						</h3>
						<p>
							These Terms of Service shall remain in full force and effect while you use the Site.
							WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE
							RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
							LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
							CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
							REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
							REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
							OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
							TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR
							ACCOUNT AND] ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
							TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
						</p>
						<p>
							If we terminate or suspend your account for any reason, you are prohibited from
							registering and creating a new account under your name, a fake or borrowed name, or
							the name of any third party, even if you may be acting on behalf of the third party.
						</p>
						<p>
							In addition to terminating or suspending your account, we reserve the right to take
							appropriate legal action, including without limitation pursuing civil, criminal, and
							injunctive redress.	
						</p>
						<h3>
							MODIFICATIONS AND INTERRUPTIONS
						</h3>
						<p>
							We reserve the right to change, modify, or remove the contents of the Site at any time or
							for any reason at our sole discretion without notice. However, we have no obligation to
							update any information on our Site. We also reserve the right to modify or discontinue
							all or part of the Site without notice at any time.				
						</p>
						<p>
							We will not be liable to you or any third party for any modification, price change,
							suspension, or discontinuance of the Site.	
						</p>
						<p>
							We cannot guarantee the Site will be available at all times. We may experience
							hardware, software, or other problems or need to perform maintenance related to the
							Site, resulting in interruptions, delays, or errors.
						</p>
						<p>
							We reserve the right to change, revise, update, suspend, discontinue, or otherwise
							modify the Site at any time or for any reason without notice to you. You agree that we
							have no liability whatsoever for any loss, damage, or inconvenience caused by your
							inability to access or use the Site during any downtime or discontinuance of the Site.
						</p>
						<p>
							Nothing in these Terms of Service will be construed to obligate us to maintain and
							support the Site or to supply any corrections, updates, or releases in connection
							therewith.
						</p>
						<h3>
							GOVERNING LAW
						</h3>
						<p>
							These Terms of Service and your use of the Site are governed by and construed in
							accordance with the laws of the State of <b>New Jersey</b> applicable to agreements made
							and to be entirely performed within the State/Commonwealth of <b>New Jersey</b>, without
							regard to its conflict of law principles.
						</p>
						<h3>
							DISPUTE RESOLUTION
						</h3>
						<p>
							<b>Option 1:</b> Any legal action of whatever nature brought by either you or us (collectively,
							the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state
							and federal courts located in Cape May County, New Jersey, and the Parties hereby
							consent to, and waive all defenses of lack of personal jurisdiction and forum non
							conveniens with respect to venue and jurisdiction in such state and federal courts.
						</p>
						<p>
							Application of the United Nations Convention on Contracts for the International Sale of
							Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded
							from these Terms of Service. In no event shall any claim, action, or proceeding brought
							by either Party related in any way to the Site be commenced more than 2 years
							after the cause of action arose.							
						</p>
						<h5>
							<b>Option 2: Informal Negotiations</b>
						</h5>
						<p>
							To expedite resolution and control the cost of any dispute, controversy, or claim related
							to these Terms of Service (each a "Dispute" and collectively, the "Disputes") brought by
							either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree
							to first attempt to negotiate any Dispute (except those Disputes expressly provided
							below) informally for at least 31 days before initiating arbitration. Such informal
							negotiations commence upon written notice from one Party to the other Party.
						</p>
						<h5>
							<b>Binding Arbitration</b>
						</h5>
						<p>
							If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute
							(except those Disputes expressly excluded below) will be finally and exclusively
							resolved by binding arbitration. <b>YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE 
							THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.</b>
						</p>
						<p>
							The arbitration shall be commenced and conducted under the Commercial Arbitration
							Rules of the American Arbitration Association ("AAA") and, where appropriate, the
							AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer
							Rules"), both of which are available at the AAA website <a href="http://www.adr.org/" target="_blank">www.adr.org</a>
						</p>
						<p>
							Your arbitration fees and your share of arbitrator compensation shall be governed by the
							AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. [If
							such costs are determined by the arbitrator to be excessive, we will pay all arbitration
							fees and expenses.]
						</p>
						<p>
							The arbitration may be conducted in person, through the submission of documents, by
							phone, or online. The arbitrator will make a decision in writing, but need not provide a
							statement of reasons unless requested by either Party.
						</p>
						<p>
							The arbitrator must follow applicable law, and any award may be challenged if the
							arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or
							applicable law, the arbitration will take place in <b>Cape May County, New Jersey</b>.
						</p>
						<p>
							Except as otherwise provided herein, the Parties may litigate in court to compel
							arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter
							judgment on the award entered by the arbitrator.
						</p>
						<p>
							If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall
							be commenced or prosecuted in the state and federal courts located in <b>Cape May
							County, New Jersey</b>, and the Parties hereby consent to, and waive all defenses of lack
							of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction
							in such state and federal courts.
						</p>
						<p>
							Application of the United Nations Convention on Contracts for the International Sale of
							Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded
							from these Terms of Service.						
						</p>
						<p>
							In no event shall any Dispute brought by either Party related in any way to the Site be
							commenced more than <b>10 (ten)</b> years after the cause of action arose. If this provision is
							found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute
							falling within that portion of this provision found to be illegal or unenforceable and such
							Dispute shall be decided by a court of competent jurisdiction within the courts listed for
							jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that
							court.
						</p>
						<h5>
							<b>Option 3: Binding Arbitration</b>
						</h5>
						<p>
							To expedite resolution and control the cost of any dispute, controversy or claim related
							to these Terms of Service (each a "Dispute" and collectively, "Disputes"), any Dispute
							brought by either you or us (individually, a "Party" and collectively, the "Parties") shall be
							finally and exclusively resolved by binding arbitration.						
						</p>
						<p>
							YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE
							RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be
							commenced and conducted under the Commercial Arbitration Rules of the American
							Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary
							Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are
							available at the AAA website <a href="http://www.adr.org/" target="_blank">www.adr.org</a>.
						</p>
						<p>
							Your arbitration fees and your share of arbitrator compensation shall be governed by the
							AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. [If
							such costs are determined by the arbitrator to be excessive, we will pay all arbitration
							fees and expenses.]
						</p>
						<p>
							The arbitration may be conducted in person, through the submission of documents, by
							phone, or online. The arbitrator will make a decision in writing, but need not provide a
							statement of reasons unless requested by either Party. The arbitrator must follow
							applicable law, and any award may be challenged if the arbitrator fails to do so.
						</p>
						<p>
							Except where otherwise required by the applicable AAA rules or applicable law, the
							arbitration will take place in <b>Cape May County, New Jersey</b>. Except as otherwise
							provided herein, the Parties may litigate in court to compel arbitration, stay proceedings
							pending arbitration, or to confirm, modify, vacate, or enter judgment on the award
							entered by the arbitrator.						
						</p>
						<p>
							If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall
							be commenced or prosecuted in the state and federal courts located in <b>Cape May
							County, New Jersey</b>, and the Parties hereby consent to, and waive all defenses of lack
							of, personal jurisdiction, and forum non conveniens with respect to venue and
							jurisdiction in such state and federal courts.
						</p>
						<p>
							Application of the United Nations Convention on Contracts for the International Sale of
							Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded
							from these Terms of Service. In no event shall any Dispute brought by either Party
							related in any way to the Site or Services be commenced more than <b>10 (ten)</b> years after
							the cause of action arose.
						</p>
						<p>
							If this provision is found to be illegal or unenforceable, then neither Party will elect to
							arbitrate any Dispute falling within that portion of this provision found to be illegal or
							unenforceable and such Dispute shall be decided by a court of competent jurisdiction
							within the courts listed for jurisdiction above, and the Parties agree to submit to the
							personal jurisdiction of that court.		
						</p>
						<h5>
							<b>Option 2/Option 3: Restrictions</b>
						</h5>
						<p>
							The Parties agree that any arbitration shall be limited to the Dispute between the Parties
							individually. To the full extent permitted by law, (a) no arbitration shall be joined with any
							other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a
							class-action basis or to utilize class action procedures; and (c) there is no right or
							authority for any Dispute to be brought in a purported representative capacity on behalf
							of the general public or any other persons.
						</p>
						<h5>
							<b>Option 2/Option 3: Exceptions to [Informal Negotiations and] Arbitration</b>
						</h5>
						<p>
							The Parties agree that the following Disputes are not subject to the above provisions
							concerning [informal negotiations and] binding arbitration: (a) any Disputes seeking to
							enforce or protect, or concerning the validity of, any of the intellectual property rights of
							a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion
							of privacy, or unauthorized use; and (c) any claim for injunctive relief.
						</p>
						<p>
							If this provision is found to be illegal or unenforceable, then neither Party will elect to
							arbitrate any Dispute falling within that portion of this provision found to be illegal or
							unenforceable and such Dispute shall be decided by a court of competent jurisdiction
							within the courts listed for jurisdiction above, and the Parties agree to submit to the
							personal jurisdiction of that court.			
						</p>
						<h3>
							CORRECTIONS
						</h3>
						<p>
							There may be information on the Site that contains typographical errors, inaccuracies,
							or omissions that may relate to the Site, including descriptions, pricing, availability, and
							various other information. We reserve the right to correct any errors, inaccuracies, or
							omissions and to change or update the information on the Site at any time, without prior
							notice.	
						</p>
						<h3>
							DISCLAIMER
						</h3>
						<p>
							THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
							THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. 
							TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
							WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
							YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
							WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
							AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
							ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE
							CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
							LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
							INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
							PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
							ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR
							USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
							INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
							INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5)
							ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
							TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
							ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
							LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
							CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
							SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
							RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
							BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
							WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
							ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
							RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
							THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.							
						</p>
						<p>
							AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM
							OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
							EXERCISE CAUTION WHERE APPROPRIATE.
						</p>
						<h3>
							LIMITATIONS OF LIABILITY
						</h3>
						<p>
							IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
							LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
							CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
							INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER
							DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN
							ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. <br />
							<i>
								[NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
								LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
								FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO [THE LESSER OF]
								[THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE PREVIOUS MONTH
								PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING [OR] [ $1,000]. CERTAIN
								STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
								EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
								IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR
								LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL
								RIGHTS.]
							</i>
						</p>
						<h3>
							INDEMNIFICATION
						</h3>
						<p>
							You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
							affiliates, and all of our respective officers, agents, partners, and employees, from and
							against any loss, damage, liability, claim, or demand, including reasonable attorneys’
							fees and expenses, made by any third party due to or arising out of: (1) [your
							Contributions]; (2) use of the Site; (3) breach of these Terms of Service; (4) any breach
							of your representations and warranties set forth in these Terms of Service; (5) your
							violation of the rights of a third party, including but not limited to intellectual property
							rights; or (6) any overt harmful act toward any other user of the Site with whom you
							connected via the Site.
						</p>
						<p>
							Notwithstanding the foregoing, we reserve the right, at your expense, to assume the
							exclusive defense and control of any matter for which you are required to indemnify us,
							and you agree to cooperate, at your expense, with our defense of such claims. We will
							use reasonable efforts to notify you of any such claim, action, or proceeding which is
							subject to this indemnification upon becoming aware of it.		
						</p>
						<h3>
							USER DATA
						</h3>
						<p>
							We will maintain certain data that you transmit to the Site for the purpose of managing
							the Site, as well as data relating to your use of the Site. Although we perform regular
							routine backups of data, you are solely responsible for all data that you transmit or that
							relates to any activity you have undertaken using the Site.						
						</p>
						<p>
							You agree that we shall have no liability to you for any loss or corruption of any such
							data, and you hereby waive any right of action against us arising from any such loss or
							corruption of such data.
						</p>
						<h5>
							<b>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND
							SIGNATURES</b>
						</h5>
						<p>
							Visiting the Site, sending us emails, and completing online forms constitute electronic
							communications. You consent to receive electronic communications, and you agree that
							all agreements, notices, disclosures, and other communications we provide to you
							electronically, via email and on the Site, satisfy any legal requirement that such
							communication be in writing.
						</p>
						<p>
							YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
							ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
							POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US
							OR VIA THE SITE.
						</p>
						<p>
							You hereby waive any rights or requirements under any statutes, regulations, rules,
							ordinances, or other laws in any jurisdiction which require an original signature or
							delivery or retention of non-electronic records, or to payments or the granting of credits
							by any means other than electronic means
						</p>
						<h3>
							CALIFORNIA USERS AND RESIDENTS
						</h3>
						<p>
							If any complaint with us is not satisfactorily resolved, you can contact the Complaint
							Assistance Unit of the Division of Consumer Services of the California Department of
							Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
							California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.			
						</p>
						<h3>
							MISCELLANEOUS
						</h3>
						<p>
							These Terms of Service and any policies or operating rules posted by us on the Site
							constitute the entire agreement and understanding between you and us. Our failure to
							exercise or enforce any right or provision of these Terms of Service shall not operate as
							a waiver of such right or provision.
						</p>
						<p>
							These Terms of Service operate to the fullest extent permissible by law. We may assign
							any or all of our rights and obligations to others at any time. We shall not be responsible
							or liable for any loss, damage, delay, or failure to act caused by any cause beyond our
							reasonable control.
						</p>
						<p>
							If any provision or part of a provision of these Terms of Service is determined to be
							unlawful, void, or unenforceable, that provision or part of the provision is deemed
							severable from these Terms of Service and does not affect the validity and enforceability
							of any remaining provisions.
						</p>
						<p>
							There is no joint venture, partnership, employment or agency relationship created
							between you and us as a result of these Terms of Service or use of the Site. You agree
							that these Terms of Service will not be construed against us by virtue of having drafted
							them.
						</p>
						<p>
							You hereby waive any and all defenses you may have based on the electronic form of
							these Terms of Service and the lack of signing by the parties hereto to execute these
							Terms of Service.
						</p>
						<hr />
						<h3>
							ATTRIBUTION
						</h3>
						<p>
							&bull; These <a href="https://termly.io/resources/templates/terms-of-service-template/" target="_blank">terms of service</a> were created using Termly. All rights reserved.
							&bull; Underwritten by <a href="https://ruff-manage.com/" target="_blank">Ruff Management Inc.</a>
						</p>
						<hr />
						<h3>
							<b>CONTACT US</b>
						</h3>
						<p>
							In order to resolve a complaint regarding the Site or to receive further information
							regarding use of the Site, please contact us at: <br />
							&bull; Email: <a href="mailto:hello@blazed.space">hello@blazed.space</a> <br />
							&bull; Telephone: <a href="tel:+18557882348">1 (855) 788-2348</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	`;
}

function faq(){
	return `
		<section id="maincontent">
			<div class="container">
				<div class="row">
					<div class="span12">
					<!-- start services and products -->
					<h3>
						Services and Products
					</h3>
					<div class="accordion botspacer40" id="services-and-products">
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#services-and-products" href="#service-offering">
								1. What is your complete service offering?
							</a>
						</div>
						<div id="service-offering" class="accordion-body collapse in">
							<div class="accordion-inner">
							<p>
								While our services span multiple disciplines, our full-scope of service offering is as follows:
							</p>
							<ul>
								<li><a target="_blank" href="https://blazed.xyz/">Publishing</a></li>
								<li><a target="_blank" href="https://blazed.systems/">Systems Administration</a></li>
								<li><a target="_blank" href="https://blazed.tel/">Telecommunications</a></li>
								<li><a target="_blank" href="https://blazed.dev/">Software/Web Development</a></li>
							</ul>
							</div>
						</div>
						</div>
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#services-and-products" href="#blz-one">
									2. What is the Blazed One Solution?
								</a>
						</div>
						<div id="blz-one" class="accordion-body collapse">
							<div class="accordion-inner">
							<p>
								The Blazed One Solution includes the above mentioned services, as well as the following products:
							</p>
							<ul>
								<li><a href="https://blazed.space/" target="_blank">Blazed Space</a></li>
								<li><a href="https://blazed.watch/" target="_blank">Blazed Watch</a></li>
								<li><a href="https://blazed.software/" target="_blank">Blazed Software</a></li>
								<li><a href="https://blazed.world/" target="_blank">Blazed World</a></li>
								<li><a href="https://blazed.city/" target="_blank">Blazed City</a></li>
								<li><a href="https://blazed.place/" target="_blank">Blazed Place</a></li>
								<li><a href="https://blazed.bond/" target="_blank">Blazed Bond</a></li>
								<li><a href="https://blazed.games/" target="_blank">Concrete Games</a></li>
							</ul>
							<p>
								Finally, you can check out the <a target="_blank" href="https://blz.one/">Blazed One Hub</a>, to tie it all together.
							</p>
							</div>
						</div>
						</div>
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#services-and-products" href="#blazed-dev">
								3. How can I contribute to Blazed Development Group?
							</a>
						</div>
						<div id="blazed-dev" class="accordion-body collapse">
							<div class="accordion-inner">
								<h2>
									Get Involved
								</h2>
								<p>
									If you would like to contribute to Blazed open source software, you are in luck, because most of our projects are open source! 
									We welcome all types of contributions, project management, development, and testing.
								</p>
								<hr />
								<h4>
									Project Management
								</h4>
								<ul>
									<li>
										<span>Submit feature requests in the Discussions section of the repo.</span>
									</li>
									<li>
										<span>Join the <a href="https://www.facebook.com/groups/blzdev" target="_blank">Blazed Development Group</a>, and post directly to the group.</span>
									</li>
								</ul>
								<h4>
									Development
								</h4>
								<ul>
									<li>
										<span>Fix bugs found in the Issues section of the repo.</span>
									</li>
									<li>
										<span>Submit an implementation of an approved feature request. To submit code:</span><br />
										1. Fork the repo. <br />
										2. Commit your update. <br />
										3. Submit Pull Request
									</li>
									<li>
										<span>Don't forget to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue" target="_blank">link PR to issue</a> if you are solving one.</span>
									</li>
									<li>
										<span>Enable the checkbox to <a href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork" target="_blank">allow maintainer edits</a> so the branch can be updated for a merge. Once you submit your PR, a Blazed Development Group team member will review your proposal. We may ask questions or request for additional information.</span>
									</li>
									<li>
										<span>We may ask for changes to be made before a PR can be merged, either using <a href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request" target="_blank">suggested changes</a> or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.</span>
									</li>
									<li>
										<span>As you update your PR and apply changes, mark each conversation as <a href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations" target="_blank">resolved</a>.</span>
									</li>
									<li>
										<span>If you run into any merge issues, checkout this <a href="https://github.com/skills/resolve-merge-conflicts" target="_blank">git tutorial</a> to help you resolve merge conflicts and other issues.</span>
									</li>
									<li>
										<span>Your PR is merged! Congratulations 🎉🎉 The Blazed Development Group thanks you ✨. Once your PR is merged, your contributions will be publicly visible on the affected repo.</span>
									</li>
								</ul>
								<h4>
									Testing
								</h4>
								<ul>
									<li>
										<span>If you come across a bug, fluke, or unsavory UX story; please do not hesitate to create a new Issue. Of course, first check if the issue has already been raised by using the search feature.</span>
									</li>
									<li>
										<span>If you would like to share your user experience story, even if it was purely positive, you may do so in the Discussions section of the repo.</span>
									</li>
								</ul>
								<hr />
								<h3>
									Questions? Comments? Concerns?
								</h3>
								<ul>
									<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
									<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
									<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
									<li>
										Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
										<address>
											Blazed Labs LLC<br />
											1650 Simpson Ave <br />
											Ocean City, NJ 08226
										</address>
									</li>
								</ul>
							</div>
						</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#services-and-products" href="#code-of-conduct">
									4. What is your contributor code of conduct?
								</a>
							</div>
							<div id="code-of-conduct" class="accordion-body collapse">
								<div class="accordion-inner">
									<h2>
										Contributor Code of Conduct
									</h2>
									<h3>
										Our Pledge
									</h3>
									<p>
										We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
									</p>
									<p>
										We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
									</p>
									<hr />
									<h3>
										Our Standards
									</h3>
									<p>
										Examples of behavior that contributes to a positive environment for our community include:
									</p>
									<ul>
										<li>
											Demonstrating empathy and kindness toward other people;
										</li>
										<li>
											Being respectful of differing opinions, viewpoints, and experiences;
										</li>
										<li>
											Giving and gracefully accepting constructive feedback;
										</li>
										<li>
											Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience;
										</li>
										<li>
											Focusing on what is best not just for us as individuals, but for the overall community;
										</li>
									</ul>
									<p>
										<b>Examples of unacceptable behavior include:</b>
									</p>
									<ul>
										<li>
											The use of sexualized language or imagery, and sexual attention or advances of any kind;
										</li>
										<li>
											Trolling, insulting or derogatory comments, and personal or political attacks;
										</li>
										<li>
											Public or private harassment;
										</li>
										<li>
											Publishing others' private information, such as a physical or email address, without their explicit permission;
										</li>
										<li>
											Other conduct which could reasonably be considered inappropriate in a professional setting;
										</li>
									</ul>
									<h4>
										Enforcement Responsibilities
									</h4>
									<p>
										Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
									</p>
									<p>
										Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
									</p>
									<h4>
										Scope
									</h4>
									<p>
										This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
									</p>
									<h4>
										Enforcement
									</h4>
									<p>
										Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at [INSERT CONTACT METHOD]. All complaints will be reviewed and investigated promptly and fairly.
									</p>
									<p>
										All community leaders are obligated to respect the privacy and security of the reporter of any incident.
									</p>
									<h3>
										<b>Enforcement Guidelines</b>
									</h3>
									<p>
										Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
									</p>
									<ol>
										<li>
											<h5>
												<b>Correction</b>
											</h5>
											<p>
												<b>Community Impact:</b> Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
												<br />
												<b>Consequence:</b> A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
											</p>
										</li>
										<li>
											<h5>
												<b>Warning</b>
											</h5>
											<p>
												<b>Community Impact:</b> A violation through a single incident or series of actions.
												<br />
												<b>Consequence:</b> A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
											</p>
										</li>
										<li>
											<h5>
												<b>Temporary Ban</b>
											</h5>
											<p>
												<b>Community Impact:</b> A serious violation of community standards, including sustained inappropriate behavior.
												<br />
												<b>Consequence:</b> A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
											</p>
										</li>
										<li>
											<h5>
												<b>Permanent Ban</b>
											</h5>
											<p>
												<b>Community Impact:</b> Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.
												<br />
												<b>Consequence:</b> A permanent ban from any sort of public interaction within the community.
											</p>
										</li>
									</ol>
									<hr />
									<h3>
										Attribution
									</h3>
									<ul>
										<li>This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org/" target="_blank">Contributor Covenant</a>, version 2.1, available at <a target="_blank" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html">https://www.contributor-covenant.org/version/2/1/code_of_conduct.html</a>.</li>
										<li>Community Impact Guidelines were inspired by <a target="_blank" href="https://github.com/mozilla/diversity">Mozilla's code of conduct enforcement ladder</a>.</li>
									</ul>
									<p>
										For answers to common questions about this code of conduct, see the FAQ at <a href="https://www.contributor-covenant.org/faq" target="_blank">https://www.contributor-covenant.org/faq</a>. 
										<br />
										Translations are available at <a href="https://www.contributor-covenant.org/translations" target="_blank">https://www.contributor-covenant.org/translations</a>.
									</p>
									<hr />
									<h3>
										Questions? Comments? Concerns?
									</h3>
									<ul>
										<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
										<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
										<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
										<li>
											Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
											<address>
												Blazed Labs LLC<br />
												1650 Simpson Ave <br />
												Ocean City, NJ 08226
											</address>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#services-and-products" href="#contact-us">
									5. How do I get in touch with Blazed Labs LLC?
								</a>
						</div>
						<div id="contact-us" class="accordion-body collapse">
							<div class="accordion-inner">
							<h3>
								Contact Us
							</h3
							<p>
								<label>
									Email:
								</label>
								<a href="mailto:hello@blazed.space">
									hello@blazed.space
								</a>
							</p>
							<p>
								<label>
									<abbr title="Telephone">Tel:</abbr>
								</label>
								<a href="tel:+18557882348">
									1 (855) 788-2348
								</a>
							</p>
							<p>
								<label>
									Online:
								</label>
								<a target="_blank" href="https://blazed.contact/website">
									Website Sales Inquiries
								</a>
								&nbsp; | &nbsp;
								<a target="_blank" href="https://blazed.contact/app">
									App Sales Inquiries
								</a>
								&nbsp; | &nbsp;
								<a target="_blank" href="https://blazed.tel/contact">
									Telecom Sales Inquiries
								</a>
								&nbsp; | &nbsp;
								<a target="_blank" href="https://blazed.systems/contact">
									Systems Sales Inquiries
								</a>
								&nbsp; | &nbsp;
								<a target="_blank" href="https://blazed.company/contact">
									Other Inquiries
								</a>
							</p>
							<p>
								<label>
									Address:
								</label>
								<address>
									Blazed Labs LLC <br />
									1650 Simpson Ave <br />
									Ocean City, NJ 08226
								</address>
							</p>
							</div>
						</div>
						</div>
					</div>
					<!-- end services and products -->
					<!-- start support and maintenance -->
					<h3>
						Support and Maintenance
					</h3>
					<div class="accordion botspacer40" id="support-and-maintenance">
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#support-and-maintenance" href="#software-warranty">
									1. Blazed Labs Software Warranty
								</a>
						</div>
						<div id="software-warranty" class="accordion-body collapse in">
							<div class="accordion-inner">
								<h3>
									Software Warranty
								</h3>
								<p>
									The Software will operate in conformity with the then current standard Documentation (except for minor defects or errors not material to the core functionality of the Software under normal use and circumstances) for a period of one-hundred and twenty (120) days from the date of initial delivery of the Software ("Warranty Period"). If the Software does not perform in accordance with the foregoing warranty during the Warranty Period, You must tell Us so in writing and during the Warranty Period and assuming We can verify such nonconformity, We will use reasonable efforts to correct any deficiencies in the Software so that it will perform in accordance with such warranty. Your sole and exclusive remedy, and Our sole obligation in the event of nonconformity of the Software with the foregoing warranty will be the correction of the condition making it nonconforming. If We are not able correct the alleged breach of warranty, then We will refund applicable fees paid for a perpetual licence to the Software and will refund applicable fees paid for the remainder of the Term for subscription licensed Software. Your obligation is to provide all information reasonably requested to enable Us to cure the nonconformity. The above warranty specifically excludes defects resulting from accident, abuse, unauthorized repair, modifications, misapplication, or use of the Software that is otherwise materially inconsistent with the Documentation.
								</p>
								<hr />
								<h3>
									Questions? Comments? Concerns?
								</h3>
								<ul>
									<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</a></span></a></li>
									<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
									<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
									<li>
										Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
										<address>
											Blazed Labs LLC<br />
											1650 Simpson Ave <br />
											Ocean City, NJ 08226
										</address>
									</li>
								</ul>
							</div>
						</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#support-and-maintenance" href="#support-tel">
										2. Help! I need support with my phone system.
									</a>
							</div>
							<div id="support-tel" class="accordion-body collapse">
								<div class="accordion-inner">
									<h3>
										Blazed Telecom Support
									</h3>
									<p>
										Support for all system failures is included free-of-charge for all <a href="https://blazed.tel/" target="_blank">Blazed Telecom</a> customers. 
									</p>
									<p>
										You may file a support ticket using any one of the following methods:
									</p>
									<ul>
										<li>Web Form: <a href="https://www.blazed.tel/support" target="_blank">Click Here</a></li>
										<li>Email: <a href="mailto:support@blazed.tel" target="_blank">support@blazed.tel</a></li>
										<li><abbr title="Telephone">Tel:</abbr> <a href="tel:+18559764121" target="_blank">1 (855) 976-4121</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#support-and-maintenance" href="#support-sys">
										3. Help! I need support with my inter-networking system.
									</a>
							</div>
							<div id="support-sys" class="accordion-body collapse">
								<div class="accordion-inner">
									<h3>
										Blazed Systems Support
									</h3>
									<p>
										Support for all system failures is included free-of-charge for all <a href="https://blazed.systems/" target="_blank">Blazed Systems</a> customers. 
									</p>
									<p>
										You may file a support ticket using any one of the following methods:
									</p>
									<ul>
										<li>Web Form: <a href="https://www.blazed.systems/support" target="_blank">Click Here</a></li>
										<li>Email: <a href="mailto:support@blazed.tel" target="_blank">support@blazed.systems</a></li>
										<li><abbr title="Telephone">Tel:</abbr> <a href="tel:+19088679329" target="_blank">1 (908) 867-9329</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#support-and-maintenance" href="#support-software">
									4. Help! I need support with my software or website.
								</a>
							</div>
							<div id="support-software" class="accordion-body collapse">
								<div class="accordion-inner">
									<h3>
										Blazed Development Group Support
									</h3>
									<p>
										Support for patching any and all major bugs,  is included free-of-charge for all <a href="https://blazed.dev/" target="_blank">Blazed Development Group</a> customers. 
									</p>
									<p>
										You may file a support ticket using any one of the following methods:
									</p>
									<ul>
										<li>Web Form: <a href="https://www.blazed.dev/contact.html" target="_blank">Click Here</a></li>
										<li>Email: <a href="mailto:support@blazed.dev" target="_blank">support@blazed.dev</a></li>
										<li><abbr title="Telephone">Tel:</abbr> <a href="tel:+18557882348" target="_blank">1 (855) 788-2348</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-- end support and maintenance -->

					<!-- start legal policy and agreements -->
					<h4>
						Legal Policy and Agreements
					</h4>

					<div class="accordion botspacer40" id="legal-policy">
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#legal-policy" href="#privacy">
									1. What is you company privacy policy?
								</a>
						</div>
						<div id="privacy" class="accordion-body collapse">
							<div class="accordion-inner">
								<h2>
									Privacy Policy
								</h2>
								<p>
									<b>Definitions:</b>
								</p>
								<ul>
									<li><span>("Company") or the ("Company") shall refer to the legal entity operating under the name "Blazed Labs LLC.", "Blazed Publishing BD.", "Blazed Systems BD.", and/or "Concrete Games Interactive".</span></li>
									<li><span>("COPPA") or ("Children's Online Privacy Protection Rule") shall refer to the United States child privacy laws, which requires compliance to a six (6) step plan if the ("Company") collects information from children under the age of thirteen (13).</span></li>
									<li><span>("CAN-SPAM") or the ("Controlling the Assault of Non-Solicited Pornography And Marketing Act") shall refer to the United States privacy laws regarding unsolicited email marketing.</span></li>
									<li><span>This ("Document") or the ("Document") shall refer to the legally binding agreement constituted herein.</span></li>
									<li><span>("Personal Information") shall refer to Individually identifiable information about an individual collected online, including: A. a first and last name; B. a home or other physical address including street name and name of a city or town; C. an e-mail address; D. a telephone number; E. a Social Security number; F. any other identifier that the Commission determines permits the physical or online contacting of a specific individual; or G. information concerning the child or the parents of that child that the website collects online from the child and combines with an identifier described in this paragraph</span></li>
								</ul>
								<hr /> 
								<h3>
									INTRODUCTION
								</h3>
								<p>
									The Blazed Labs LLC ("Company") cares deeply about the privacy of its users' ("Personal Information"). That is why the ("Company") does not store, share, or accept any user's ("Personal Information"), until the user agrees to our privacy policy this ("Document"). By agreeing to this ("Document"), the user also claims that he/she has attained to the age of thirteen (13), and if under the age of eighteen (18), has agreed to this ("Document") only if accompanied by a legal parent or guardian (as defined by the user's local government).
								</p>
								<h3>
									DATA COLLECTED
								</h3>
								<p>
									Data is only collected when a user registers or logs on to an account. Before a user can register for an account, they must agree to this privacy policy as well as the service agreement(s) pertaining to the service to be availed.
								</p>

								<p>
									The ("Company") reserves the right to change this agreement at any time, but will refrain from allowing any user to continue to share data until they have agreed to the updated policy.
								</p>

								<p>
									The exact data collected by these services, which are required is:
								</p>
								<ul>
									<li><span>User name (user selected handle or alias; collected and public [If user's account is public])</span></li>
									<li><span>Email address (collected and private)</span></li>
									<li><span>First and Last name</span></li>
								</ul>
								<p>
									The exact data collected by these services, which are optional is:
								</p>
								<ul>
									<li><span>Telephone number</span></li>
									<li><span>Location related information</span></li>
									<li><span>Gender</span></li>
									<li><span>Date of Birth</span></li>
									<li><span>Social Media Accounts</span></li>
								</ul>
								<h3>
									DATA PRIVACY
								</h3>
								<p>
									The ("Company") agrees to never sell, share, or divulge the ("Personal Information") of any of its users. The ("Company") agrees to be honest and share with its users in the event of a data leak (or otherwise loss of control over the data collected from the user).
								</p>
								<p>
									<b>Please reach out to us if you have any questions or concerns.</b>
								</p>
								<hr />
								<h3>
									Questions? Comments? Concerns?
								</h3>
								<ul>
									<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
									<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
									<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
									<li>
										Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
										<address>
											Blazed Labs LLC<br />
											1650 Simpson Ave <br />
											Ocean City, NJ 08226
										</address>
									</li>
								</ul>
							</div>
						</div>
						</div>
						<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#legal-policy" href="#dmca">
									2. What is your company DMCA (copyright) policy?
								</a>
							</div>
							<div id="dmca" class="accordion-body collapse">
								<div class="accordion-inner">
									<h2>
										DMCA Policy
									</h2>
									<hr />
									<h3>
										Claims of Copyright and Trademark Infringement
									</h3>
									<p>
										If you, a user ("User" or "you") of any Blazed Labs LLC ("Blazed Labs," "we", "our" or "us") website, software, solutions and tools, mobile applications and other online offerings and services (collectively, "Sites") believe that your intellectual property is being used on any Site in a way that constitutes copyright infringement, please provide our Designated Agent (set forth below) with a notice setting forth the following information (as required by Section 512(c)(3) of the Digital Millennium Copyright Act (the "DMCA")):
									</p>
									<p>
										Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online website are covered by a single notification, a representative list of such works at that website, including any applicable copyright registration number; Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material on our Site; Information sufficient to demonstrate that you are the owner of the copyrighted work or an authorized representative of such owner; Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address, if different from the information you provided in your User Account (as defined in our Terms of Use) and Include the following statements:
									</p>
									<blockquote>
										"I have a good faith belief that use of the material in the manner complained of is not authorized by me, my agent, or the law."; and; "The information in the notification is accurate, and under penalty of perjury, that I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."
									</blockquote>
									<p>
										<b>The foregoing notice must be sent to our Designated Agent, whose contact information is as follows:</b>
									</p>
									<ul>
										<li>Designated Agent Telephone At: <a href="tel:+18338870061">+1(833) 887-0061</a></li>
										<li>Send Via Email At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></li>
										<li>Send Via Online Form: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
										<li>
											Or U.S. Mail At Copyright Agent <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
											<address>
												Blazed Labs LLC<br />
												1650 Simpson Ave <br />
												Ocean City, NJ 08226
											</address>
										</li>
									</ul>
									<p>
										Remember, only the copyright owner or their authorized representative may file a report of copyright infringement. If you believe something on the Sites infringes someone else's copyright, you may want to inform the rights owner. Please note that Section 512(f) of the DMCA may impose liability for damages on any person who knowingly sends meritless notices of infringement. Any information or correspondence that you provide may be shared with third parties, including the person who provided the alleged infringing material. Upon receipt of a bona fide notice containing all of the information referenced above, we will review the notice and if we determine that an infringement has occurred, we will take appropriate actions, including, notifying the user that posted the offending material and removing or disabling access to the infringing material. If the user that posted the offending material is a repeat offender or has otherwise violated our user policies, we may decide to terminate that user's access to our Sites.
									</p>
									<p>
										If you believe that your content should not have been removed for alleged copyright infringement, you may send our Designated Agent a counter-notice that includes the following information:
									</p>
									<p>
										Identification of the copyrighted work that was removed, and the location on the Sites where the material would have been found prior to such materials removal; Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address, if different from the information you provided in your user account; and Include the following statement:
									</p>
									<blockquote>
										"Under penalty of perjury, I have a good faith belief that the content was removed as a result of a mistake or misidentification."
									</blockquote>
									<p>
										Upon receipt of a counter-notice by our Designated Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed material or cease disabling it within ten (10) business days and unless the copyright owner files an action seeking a court order against the alleged infringing user, we may replace and cease disabling access to such removed material between ten (10) and fourteen (14) business days after our Designated Agent receives the counter-notice.
									</p>
									<hr />
									<h3>
										Questions? Comments? Concerns?
									</h3>
									<ul>
										<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
										<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
										<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
										<li>
											Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
											<address>
												Blazed Labs LLC<br />
												1650 Simpson Ave <br />
												Ocean City, NJ 08226
											</address>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#legal-policy" href="#comments">
								3. What is your company comment policy?
							</a>
						</div>
						<div id="comments" class="accordion-body collapse">
							<div class="accordion-inner">
								<h2>
									Comment Policy
								</h2>
								<p>
									Please keep all comments respectful and focused. Please do not slander any other users. Please do not devulge the private information of yourself or another user.
								</p>
								<p>
									Please keep links out of comments, comments containing many (and mostly) links will be considered spam and deleted. Comments containing gibberish or broken characters will also be discarded.
								</p>
								<p>
								Please keep comment subject matter non-violent and PG. Any failure to adhere to these policies will result in instant removal of the offending comment(s). Continued infractions will result in permanent banishment from the comment platform.
								</p>
								<hr />
								<h3>
									Questions? Comments? Concerns?
								</h3>
								<ul>
									<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
									<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
									<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
									<li>
										Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
										<address>
											Blazed Labs LLC<br />
											1650 Simpson Ave <br />
											Ocean City, NJ 08226
										</address>
									</li>
								</ul>
							</div>
						</div>
						</div>
						<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse" data-parent="#legal-policy" href="#operating-agreement">
								4. What is your company operating agreement?
							</a>
						</div>
						<div id="operating-agreement" class="accordion-body collapse">
							<div class="accordion-inner">
							<h2>
								Company Operating Policy
							</h2>
							<h4>
								Formation
							</h4>
							<ol>
								<li>
									<span><b>Name.</b> The name of this limited liability company (the "Company") is:</span><br />
									<span><b>Blazed Labs LLC</b></span>.
								</li>
								<li>
									<span><b>Articles of Organization.</b> Articles of organization for the Company were filed with the Secretary of State for the state of New Jersey (State) on:<br />
									<span><b>1/13/2020</b></span>.
								</li>
								<li>
									<span>
										<b>Duration.</b> The Company will exist indefinitely unless dissolved by unanimous decision among majority shareholders.
									</span>
								</li>
								<li>
									<span>
										<b>Principal Office.</b> The Company's principal office will initially be at <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:<br />
										<address>
											1650 Simpson Ave<br />
											Ocean City, NJ 08226
										</address>
									</span>
								</li>
								<li>
									<span>
										<b>Designated Office and Agent for Service of Process.</b> The Company's initial designated office will be at: <br />
										<abbr title="1650 Simpson Ave, Ocean City, NJ 08226">1650 Simpson</abbr>, and the name of its initial agent for service of process at that address will be: <br />
										&bull; <a target="_blank" href="https://tyler-ruff.com/"><b>Tyler Ruff</b></a><br />
										The Company's designated office and its agent for service of process may only be changed by filing notice of the change with the Secretary of State of New Jersey in which the articles of organization of the Company were filed.
									</span>
								</li>
								<li>
									<span>
										<b>Purposes and Powers.</b> The Company is formed for the purpose of engaging in any lawful business that a limited liability company may engage in under the Act. The Company has the power to do all things necessary, incident, or in furtherance of that business.
									</span>
								</li>
								<li>
									<span>
										<b>Title to Assets.</b> Title to all assets of the Company will be held in the name of the Company. The Member does not have any right to the assets of the Company or any ownership interest in those assets except indirectly as a result of the Member's ownership of an interest in the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Statement of Formation.</b> A limited liability company (LLC) of the above name has been formed under the laws of the State of New jersey by filing Articles of Organization (or similar organizing document) with the Secretary of State (or other appropriate office) on <b>01/13/2020</b>.
									</span>
								</li>
							</ol>
							<p>
								The purpose of the business shall be to carry on any activity which is lawful under the jurisdiction in which it operates. The LLC may operate under a fictitious name or names as long as the LLC is in compliance with applicable fictitious name registration laws.
							</p>
							<p>
								The term of the LLC shall be perpetual or until dissolved as provided by law or by vote of the member(s) as provided in this agreement.
							</p>
							<p>
								Upon dissolution the remaining members shall have the power to continue the operation of the LLC as long as necessary and allowable under state law until the winding up of the affairs of the business has been completed.
							</p>
							<h3>
								Member
							</h3>
							<ol>
								<li>
									<span>
										<b>Name and Address.</b> The name and address of the sole member of the Company is:<br />
										<a target="_blank" href="https://tyler-ruff.com/"><b>Tyler Ruff</b></a><br />
										<address>
											1650 Simpson Ave<br />
											Ocean City, NJ 08226
										</address>
									</span>
								</li>
								<li>
									<span>
										<b>Termination of Member's Interest.</b> The Member will cease to be a member of the Company upon the Member's death, incompetency, or bankruptcy, or upon assignment of the Member's entire membership interest. Unless there are one or more other members of the Company, the person who is the holder of the Member's interest immediately after the Member ceases to be a member will become a member. If there are one or more other members of the Company at the time the Member ceases to be a member, the person who is the holder of the Member's interest immediately after the Member ceases to be a member will become a member only with the consent of the other member or members.
									</span>
								</li>
								<li>
									<span>
										<b>Additional Members.</b> Except for the holder of a member's interest who becomes a member under the provisions of the section of this agreement relating to termination of member's interest, additional members of the Company may be admitted only by written agreement of the Member and the additional members.
									</span>
								</li>
							</ol>
							<h3>
								Capital
							</h3>
							<ol>
								<li>
									<span>
										<b>Initial Capital Contribution.</b> The initial capital contribution of the Member will be made by the Member's transferring to the Company all of the assets of the business currently being operated by the Member as a sole proprietorship under the name *, subject to all of the liabilities of such business. The assets and liabilities of such business are described on the balance sheet of the business attached to this agreement as Exhibit A. The transfer will be made promptly following the signing of this agreement.
									</span>
								</li>
								<li>
									<span>
										<b>Additional Contributions.</b> Except as otherwise provided in the Act, the Member is not required to contribute additional capital to the Company. But the Member may make additional capital contributions to the Company from time to time as the Member wishes.
									</span>
								</li>
								<li>
									<span>
										<b>No Interest on Capital Contributions.</b> No interest will be paid on capital contributions.
									</span>
								</li>
								<li>
									<span>
										<b>Capital Account.</b> A capital account will be maintained for the Member. The Member's capital account will be credited with all capital contributions made by the Member and with all income and gain (including any income exempt from federal income tax) of the Company, and the Member's capital account will be charged with the amount of all distributions made to the Member and with all losses and deductions (including deductions attributable to tax exempt income) of the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Contributions.</b> The capital contribution of each limited liability company member in exchange for their LLC ownership is: <br />
										&bull; <a target="_blank" href="https://tyler-ruff.com/"><b>Tyler Ruff</b></a> (100% ownership) - $10,000
									</span>
								</li>
							</ol>
							<h3>
								Profits and Losses and Distributions
							</h3>
							<ol>
								<li>
									<span>
										<b>Profits and Losses.</b> The entire net profit or net loss of the Company for each fiscal year will be allocated to the Member and must be reported by the Member on all federal, state, and local income and other tax returns required to be filed by the Member.
									</span>
								</li>
								<li>
									<span>
										<b>Distributions.</b> Subject to the restrictions governing distributions under the Act, the Company may make distributions of cash or property from time to time to the Member, as the Member directs. But the assets of the Company may not be used to pay the separate expenses of the Member, to make personal investments for the account of the Member, or for any other purpose not related to the business of the Company.
									</span>
								</li>
							</ol>
							<h3>
								Administration of Company business
							</h3>
							<ol>
								<li>
									<span>
										<b>Management.</b> The Member has the sole right to manage and conduct the Company's business. Actions by the Member relating to the management of the Company may be memorialized in written resolutions signed by the Member, but written resolutions are not required to authorize action by the Member.
									</span>
								</li>
								<li>
									<span>
										<b>Authority of Members.</b> The Member is the agent of the Company and has authority to bind the Company on all matters. The authority of the Member includes, without limitation, the authority to: (a) sell, lease, exchange, mortgage, pledge, or otherwise transfer or dispose of all or substantially all of the property or assets of the Company; (b) merge the Company with any other entity; (c) amend the articles of organization of the Company or this agreement; (e) change the nature of the business of the Company; or (f) commence a voluntary bankruptcy case for the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Compensation and Reimbursement.</b> The Member is not entitled to the payment of any salary or other compensation for services provided to the Company. The Member is, however, entitled to reimbursement from the Company for reasonable expenses incurred on behalf of the Company, including expenses incurred in the formation, dissolution, and liquidation of the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Deadlock.</b> In the event that the members cannot come to an agreement on any matter the members agree to submit the issue to mediation to be paid for by the limited liability company. In the event the mediation is unsuccessful, they agree to seek arbitration under the rules of the American Arbitration Association.
									</span>
								</li>
							</ol>
							<h3>
								Accounting and Records
							</h3>
							<ol>
								<li>
									<span>
										<b>Books and Records.</b> The Company may keep such books and records relating to the operation of the Company as are appropriate and adequate for the Company's business. The books and records are to be available for inspection by the Member at the principal office of the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Separate Accounts.</b> The funds, assets, properties, and accounts of the Company must be maintained separately, and may not be commingled with those of the Member or any other person.
									</span>
								</li>
								<li>
									<span>
										<b>Separate Entity.</b> The limited liability company is a legal entity separate from its members. No member shall have any separate liability for any debts, obligations, or liability of the LLC except as provided in this agreement.
									</span>
								</li>
								<li>
									<span>
										<b>Fiscal Year.</b> The fiscal year of the Company will be the calendar year.
									</span>
								</li>
							</ol>
							<h3>
								Dissolution and Winding Up
							</h3>
							<ol>
								<li>
									<span>
										<b>Events of Dissolution.</b> The Company will dissolve upon the earlier of (a) approval of dissolution by the Member or (b) such time as the Company has no members. Neither the death, incompetency, or bankruptcy of the Member nor the assignment of the Member's entire membership interest will dissolve the Company.
									</span>
								</li>
								<li>
									<span>
										<b>Winding Up and Liquidation.</b> Upon the dissolution of the Company, the affairs of the Company must be wound up by the Member. If the affairs of the Company are to be wound up, a full account must be taken of the assets and liabilities of the Company, and the assets of the Company must then be promptly liquidated. The proceeds must first be paid to creditors of the Company in satisfaction of all liabilities and obligations of the Company, including, to the extent permitted by law, liabilities and obligations owed to the Member as a creditor. Any remaining proceeds may then be distributed to the Member. Property of the Company may be distributed in kind in the process of winding up and liquidation.
									</span>
								</li>
								<li>
									<span>
										<b>Negative Capital Account.</b> If the Member has a negative balance in the Member's capital account upon liquidation of the Company, the Member will have no obligation to make any contribution to the capital of the Company to make up the deficit, and the deficit will not be considered a debt owed to the Company or any other person for any purpose.
									</span>
								</li>
							</ol>
							<h3>
								Indemnification and Liability Limitation
							</h3>
							<ol>
								<li>
									<span>
										<b>Indemnification.</b> The Company must indemnify the Member to the fullest extent permissible under the law of New Jersey in which the articles of organization of the Company have been filed, as the same exists or may hereafter be amended, against all liability, loss, and costs (including, without limitation, attorneys' fees) incurred or suffered by the Member by reason of or arising from the fact that the Member is or was a member of the Company, or is or was serving at the request of the Company as a manager, member, director, officer, partner, trustee, employee, or agent of another foreign or domestic limited liability company, corporation, partnership, joint venture, trust, benefit plan, or other enterprise. The Company may, by action of the Member, provide indemnification to employees and agents of the Company who are not members. The indemnification provided in this section will not be exclusive of any other rights to which any person may be entitled under any statute, agreement, resolution of the Member, contract, or otherwise
									</span>
								</li>
								<li>
									<span>
										<b>Limitation of Liability.</b> The Member is not liable to the Company for monetary damages resulting from the Member's conduct except to the extent that the Act, as it now exists or may be amended in the future, prohibits the elimination or limitation of liability of members of limited liability companies. No repeal or amendment of this section or of the Act will adversely affect any right or protection of the Member for actions or omissions prior to the repeal or amendment.
									</span>
								</li>
							</ol>
							<h3>
								Miscellaneous Provisions
							</h3>
							<ol>
								<li>
									<span>
										<b>Amendment.</b> The Member may amend or repeal all or part of this agreement by written instrument.
									</span>
								</li>
								<li>
									<span>
										<b>Governing Law.</b> This agreement will be governed by the law of New Jersey in which the articles of organization of the Company have been filed.
									</span>
								</li>
								<li>
									<span>
										<b>Severability.</b> If any provision of this agreement is invalid or unenforceable, it will not affect the remaining provisions.
									</span>
								</li>
							</ol>
							<hr />
								<h3>
									Questions? Comments? Concerns?
								</h3>
								<ul>
									<li><span>Call us at: <a href="tel:+18557882348">+1 (855) 788-2348</span></a></li>
									<li><span>Email Us At: <a href="mailto:hello@blazed.space">hello@blazed.space</a></span></li>
									<li><span>Contact Us Online: <a target="_blank" href="https://blazed.company/contact/">Contact Us</a></span></li>
									<li>
										Or U.S. Mail At <a href="https://goo.gl/maps/3pHHxysYpWvCCjuG8" target="_blank">(Google Maps)</a>:
										<address>
											Blazed Labs LLC<br />
											1650 Simpson Ave <br />
											Ocean City, NJ 08226
										</address>
									</li>
								</ul>
							</div>
						</div>
						</div>
					</div>
					<!-- end of legal policy and agreements -->

					</div>
				</div>
			</div>
		</section>
	`;
}
function services(){
	return `
		<section id="maincontent">
			<div class="container">
				<div class="row">
					<div class="span6">
					<div class="well">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/kJ-ezkCL2Jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
					</div>

					<div class="span6">
						<h4>
							Blazed Labs Services
						</h4>
						<div class="accordion" id="accordion2">
							<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
										1. Publishing
									</a>
							</div>
							<div id="collapseOne" class="accordion-body collapse in">
								<div class="accordion-inner">
								<img src="assets/img/icons/responsive-icon.png" class="alignleft" alt="" />
								<h5>Publishing Services</h5>
								<p>
									We publish blogs, books, magazines, newspapers, scholarly journals, software, images, films, and music.
								</p>
								<a href="https://blazed.xyz/" target="_blank" class="btn btn-success">Visit Blazed Publishing</a>
								</div>
							</div>
							</div>
							<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
										2. Telecommunications
									</a>
							</div>
							<div id="collapseTwo" class="accordion-body collapse">
								<div class="accordion-inner">
								<img src="assets/img/icons/design-icon.png" class="alignleft" alt="" />
								<h5>Telecom Services</h5>
								<p>
									Helping connect your business to your customers. Call centers, PBX, Fax, and SMS/Text Messaging.
								</p>
								<a href="https://blazed.tel/" target="_blank" class="btn btn-success">Visit Blazed Telecom</a>
								</div>
							</div>
							</div>
							<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
										3. Systems Administration
									</a>
							</div>
							<div id="collapseThree" class="accordion-body collapse">
								<div class="accordion-inner">
									<img src="assets/img/icons/statistic-icon.png" class="alignleft" alt="" />
									<h5>Systems Admin Services</h5>
									<p>
										Design, development, and management of network infrastructure. Information architecture scaffolding and regulations.
									</p>
									<a href="https://blazed.systems/" target="_blank" class="btn btn-success">Visit Blazed Systems</a>
								</div>
							</div>
							</div>
							<div class="accordion-group">
							<div class="accordion-heading">
								<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour">
										4. Software Development
									</a>
							</div>
							<div id="collapseFour" class="accordion-body collapse">
								<div class="accordion-inner">
								<img src="https://blazed.sirv.com/blazed.systems/markus-spiske-Skf7HxARcoc-unsplash.jpg?w=250&h=250" class="alignleft" alt="" />
								<h5>Website and Desktop Software</h5>
								<p>
									We build desktop and mobile applications and web applications. Discover what the Blazed Development Group can do for you.
								</p>
								<a href="https://blazed.software/" target="_blank" class="btn btn-success">Visit Blazed Software</a>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		</div>
	`;
}


function about(){
	return `
		<section id="maincontent">
			<div class="container">
				<div class="row">
					<div class="span6">

					<div id="myCarousel" class="carousel slide">
						<div class="carousel-inner">
							<div class="item active">
								<img src="https://blazed.sirv.com/ibis/blazed-gallery.jpg" alt="Ibis Painting" />
								<div class="carousel-caption success">
								<h4>
									Discover our incredible portfolio.
								</h4>
								<p>
									We've assembled a stunning portfolio of websites and software, which we are quite proud of.
									<a href="https://blazed.quest/portfolio.html">View Our Portfolio</a>.
								</p>
								</div>
							</div>
							<div class="item">
								<img src="https://blazed.sirv.com/ibis/blazed-arena.jpg" alt="Ibis Arena" />
								<div class="carousel-caption success">
								<h4>
									Check out the latest news and announcements.
								</h4>
								<p>
									We post development updates, project news, and announcements on our blog.
									<br />
									<a href="https://blazed.xyz/">View Our Blog</a>.
								</p>
								</div>
							</div>
							<div class="item">
								<img src="https://blazed.sirv.com/logo/john-mcmahon-ljjcoULkxL8-unsplash.jpg?w=428&h=430" alt="" />
								<div class="carousel-caption success">
								<h4>
									Learn more about Blazed Labs.
								</h4>
								<p>
									To learn more about Blazed Labs, drop by our website.
									<br />
									<a href="https://blazedlabs.com/">View Our Website</a>.
								</p>
								</div>
							</div>
						</div>
						<a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
						<a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
					</div>
					</div>

					<div class="span6">
						<h4>About Blazed Project Management</h4>
						<p>
							We are a committee formed by Blazed Labs LLC which oversees projects and business activity contained within projects.
						</p>
						<blockquote>
							<p>
								We turn Dreams into Reality.
							</p>
						</blockquote>
						<h4>Our expertise</h4>
						<label>Web Development / Software Development</label>
						<div>
										  <a target="_blank" href="https://angular.io/">Angular</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://reactjs.com/">React</a>
							&nbsp; &nbsp; <a target="_blank" href="https://svelte.dev/">Svelte</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://php.net/">PHP</a>
							&nbsp; &nbsp; <a target="_blank" href="https://nodejs.org/">Node.js</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://python.org/">Python</a>
							&nbsp; &nbsp; <a target="_blank" href="https://www.ruby-lang.org/en/">Ruby</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://go.dev/">GoLang</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://www.java.com/">Java</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#/.NET</a>
						</div>
						<br />
						<label>Cloud Computing</label>
						<div>
										  <a target="_blank" href="https://cloud.google.com/">Google Cloud</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://azure.microsoft.com/">Microsoft Azure</a>
							&nbsp; &nbsp; <a target="_blank" href="https://cloud.oracle.com/">Oracle Cloud</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://firebase.google.com/">Google Firebase</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://cloudflare.com/">CloudFlare</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://sanity.io/">SanityCMS</a>
						</div>
						<br />
						<label>Social Marketing</label>
						<div>
										  <a target="_blank" href="https://facebook.com/">Facebook</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://twitter.com/">Twitter</a>
							&nbsp; &nbsp; <a target="_blank" href="https://linkedin.com/">Linkedin</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://github.com/">GitHub</a> 
							&nbsp; &nbsp; <a target="_blank" href="https://www.alignable.com/">Alignable</a>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="span12">
					<div class="divider"></div>
					</div>
				</div>

				<div class="row">
					<div class="span12">
					<h3 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Our awesome clients</h3>

					<div id="latest-work" class="carousel btleft">
						<div class="carousel-wrapper">

						<ul class="client">

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="https://ac-limo.com/" target="_blank" data-rel="tooltip" data-placement="top" title="Party Transportation"><img src="https://blazed.sirv.com/blazed.quest/party-transportation.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="https://rtmtransit.com/" target="_blank" data-rel="tooltip" data-placement="top" title="RTM Transportation LLC"><img src="https://blazed.sirv.com/blazed.quest/rtm-transit.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="https://oceancarservice.com/" target="_blank" data-rel="tooltip" data-placement="top" title="Ocean Car Service"><img src="https://blazed.sirv.com/blazed.quest/ocs.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="https://ruff-manage.com/" target="_blank" data-rel="tooltip" data-placement="top" title="Ruff Management Inc."><img src="https://blazed.sirv.com/blazed.quest/ruff-manage.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="http://operaonthego.org/" target="_blank" data-rel="tooltip" data-placement="top" title="Opera on the Go"><img src="https://blazed.sirv.com/blazed.quest/ootg.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

							<li>
							<div class="tooltip-demo thumbnail">
								<a href="https://blazed.games/" data-rel="tooltip" target="_blank" data-placement="top" title="Concrete Games LLC"><img src="https://blazed.sirv.com/blazed.quest/concrete-games.png?w=300&h=100" alt="" /></a>
							</div>
							</li>

						</ul>
						</div>
					</div>
					</div>
				</div>

				</div>
			</section>
	
	`;
}