export const emailTemplate = (url, template) => {
  switch (template) {
    case "forgotPassword":
      return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
      <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>New email template 2022-06-16</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
      <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]--><!--[if !mso]><!-- -->
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"><!--<![endif]-->
      <style type="text/css">
      #outlook a {
      padding:0;
      }
      .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
      }
      .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
      }
      [data-ogsb] .es-button {
      border-width:0!important;
      padding:10px 25px 10px 30px!important;
      }
      .es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
      background:#58dfec!important;
      border-color:#58dfec!important;
      }
      .es-button-border:hover {
      border-color:#26C6DA #26C6DA #26C6DA #26C6DA!important;
      background:#58dfec!important;
      border-style:solid solid solid solid!important;
      }
      [data-ogsb] .es-button.es-button-1 {
      padding:5px 15px!important;
      }
      @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:center } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:center } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
      </style>
      </head>
      <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#07023C"><!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#07023c"></v:fill>
      </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#07023C">
      <tr>
      <td valign="top" style="padding:0;Margin:0">
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;background-repeat:no-repeat;width:600px;background-image:url(https://wotgel.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_0Ia.png);background-position:center center" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" background="https://wotgel.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_0Ia.png">
      <tr>
      <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><a name="logo" href=${process.env.NEXT_PUBLIC_CLIENT_URL} style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px"></a><a target="_blank" href=${process.env.NEXT_PUBLIC_CLIENT_URL} style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px"><img src="https://dinhphot.com/wp-content/uploads/2019/10/memoryzone.png" alt="Memoryzone Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Memoryzone Logo" class="adapt-img" width="230" height="69"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:53px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:44px;font-style:normal;font-weight:bold;color:#10054D">&nbsp;We got a request to reset your&nbsp;password</h1></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;font-size:0px"><a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px"><img class="adapt-img" src="https://wotgel.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/852converted_1x3.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="300" width="276"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">&nbsp;Forgot your password? No problem - it happens to everyone!</p></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><a name="urlButton" href=${url} style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px"></a><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${url} class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#26C6DA;border-width:10px 25px 10px 30px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center"> Reset Your Password</a></span></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">If you ignore this message, your password won't be changed.</p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table bgcolor="#10054D" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#10054d;width:600px">
      <tr>
      <td align="left" background="https://wotgel.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_sSY.png" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:35px;padding-bottom:35px;background-image:url(https://wotgel.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_sSY.png);background-repeat:no-repeat;background-position:left center"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:69px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:69px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://www.facebook.com/violetoniongarden/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px"><img src="https://wotgel.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/group_118_lFL.png" alt="Contact" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="69" title="Contact" height="88"></a></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:471px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:471px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#ffffff"><b>Real people. Here to help.</b></h3></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#ffffff;font-size:14px">Have a question? Give us a call at&nbsp;<strong><a href="tel:(84)367907374" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#26C6DA;font-size:14px">(84) 3679 0 7374</a></strong>&nbsp;to chat with a Customer Success representative.</p></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:30px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:36px;font-style:normal;font-weight:bold;color:#10054D">Is this newsletter helpful?</h2></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td class="esdev-adapt-off" align="left" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px">
      <table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
      <tr>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr class="es-mobile-hidden">
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" height="40" style="padding:0;Margin:0"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${process.env.NEXT_PUBLIC_CLIENT_URL} class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#26C6DA;border-width:5px 15px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">1</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${process.env.NEXT_PUBLIC_CLIENT_URL} class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#26C6DA;border-width:5px 15px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">2</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${process.env.NEXT_PUBLIC_CLIENT_URL} class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#26C6DA;border-width:5px 15px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">3</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${process.env.NEXT_PUBLIC_CLIENT_URL} class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#26C6DA;border-width:5px 15px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">4</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:63px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#26C6DA;background:#26C6DA;border-width:4px;display:inline-block;border-radius:10px;width:auto"><a href=${process.env.NEXT_PUBLIC_CLIENT_URL} class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#26C6DA;border-width:5px 15px;display:inline-block;background:#26C6DA;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">5</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      <td style="padding:0;Margin:0;width:20px"></td>
      <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr class="es-mobile-hidden">
      <td align="left" style="padding:0;Margin:0;width:62px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" height="40" style="padding:0;Margin:0"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="left" style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">1 —&nbsp;Not at all&nbsp;helpful&nbsp;😟<br>5&nbsp;—&nbsp;Extremely&nbsp;helpful&nbsp;😊</p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
      <tr>
      <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr class="links">
      <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/about" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px">About us</a></td>
      <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/news" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px">News</a></td>
      <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://www.facebook.com/violetoniongarden/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px">Contact</a></td>
      <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href=${process.env.NEXT_PUBLIC_CLIENT_URL} style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px">The shops</a></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
      <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://www.facebook.com/violetoniongarden/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img title="Facebook" src="https://wotgel.stripocdn.email/content/assets/img/social-icons/square-colored/facebook-square-colored.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://github.com/minhtri06ltr" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img title="GitHub" src="https://stripo.email/static/assets/img/other-icons/square-colored/github-square-colored.png" alt="GitHub" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="mailto:${process.env.NEXT_PUBLIC_SENDER_EMAIL}"  style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img title="Gmail" src="https://stripo.email/static/assets/img/other-icons/square-colored/gmail-square-colored.png" alt="Gmail" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#ffffff;font-size:12px">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/policy">Privacy police</a> | <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px" href="putsubscricehere">Unsubscribe</a></p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="left" style="padding:20px;Margin:0">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=product_update_1&utm_content=it_happens_to_everyone" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://wotgel.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="56"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      </div>
      </body>
      </html>`;
      break;
    case "activate":
      return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:Arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>New email template 2022-06-16</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
      <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <style type="text/css">
      #outlook a {
      padding:0;
      }
      .ExternalClass {
      width:100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
      line-height:100%;
      }
      .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
      }
      .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
      }
      [data-ogsb] .es-button {
      border-width:0!important;
      padding:10px 20px 10px 20px!important;
      }
      @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16 px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
      </style>
      </head>
      <body style="width:100%;font-family:Arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#f6f6f6"></v:fill>
      </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
      <tr style="border-collapse:collapse">
      <td valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0">
      <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#464646;width:600px">
      <tr style="border-collapse:collapse">
      <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px"><!--[if mso]><table style="width:590px" cellpadding="0" cellspacing="0"><tr><td style="width:188px" valign="top"><![endif]-->
      <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr style="border-collapse:collapse">
      <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:188px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:5px;font-size:0px"><a name="homelink" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px"></a><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px"><img src="https://dinhphot.com/wp-content/uploads/2019/10/memoryzone.png" al t alt="Memoryzone logo" title="Memoryzone logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" class="adapt-img" width="183" height="55"></a></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:382px" valign="top"><![endif]-->
      <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="left" style="padding:0;Margin:0;width:382px">
      <table c ellspacing="0" width="100%" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td style="padding:0;Margin:0">
      <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr class="links" style="border-collapse:collapse">
      <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:25px;padding-bottom:25px;border:0" width="25.00%" bgcolor="transparent" align="center"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Arial, sans-serif;color:#a5a29b;font-size:14px" href=${process.env.NEXT_PUBLIC_CLIENT_URL} target="_blank">Home</a></td>
      <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:25px;padding-bottom:25px;border:0" width="25.00%" bgcolor="transparent" align="center"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Arial, sans-serif;color:#a5a29b;font-size:14px" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/about" target="_blank">About us</a></td>
      <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:25px;padding-bottom:25px;border:0" width="25.00%" bgcolor="transparent" align="center"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Arial, sans-serif;color:#a5a29b;font-size:14px" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/news" target="_blank">News</a></td>
      <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:25px;padding-bottom:25px;border:0" width="25.00%" bgcolor="transparent" align="center"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Arial, sans-serif;color:#a5a29b;font-size:14px" href="${process.env.NEXT_PUBLIC_CLIENT_URL}/policy" target="_blank">Policy</a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr style="border-collapse:collapse">
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#47598B;font-size:14px"><img class="adapt-img" src="https://wotgel.stripocdn.email/content/guids/CABINET_d76dc63418b630746d937a046ab741d3/images/11281501160433999.png" alt="Welcome aboard" title="Welcome aboard" width="600" height="285" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td style="padding:0;Margin:0;background-color:#ffffff" bgcolor="#ffffff" align="left">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:25px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333">We are glad you were registered!</h2></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td align="center" style="Margin:0;padding-top:5px;padding-bottom:15px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#333333;font-size:14px">Welcome to Memoryzone Family<br>Please join your shopping at our shop</p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr style="border-collapse:collapse"></tr>
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#31cb4b" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr style="border-collapse:collapse">
      <td style="Margin:0;padding-top:15px;padding-left:15px;padding-right:15px;padding-bottom:20px;background-color:#ffffff" bgcolor="#ffffff" align="left">
      <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:570px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://wotgel.stripocdn.email/content/guids/CABINET_f07dfc80b573b59ca0301364b13c9815/images/34621501160236493.png" alt="icon" title="icon" width="71" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px" height="69"></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:10px;Margin:0"><a name="urlButton" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#47598B;font-size:14px"></a><span class="es-button-border" style="border-style:solid;border-color:#2cb543;background:#47598b;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href=${url} class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#47598b;border-width:10px 20px 10px 20px;display:inline-block;background:#47598b;border-radius:30px;font-family:Arial, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Confirm</a></span></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;font-size:0">
      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0">
      <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#464646;width:600px">
      <tr style="border-collapse:collapse">
      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:25px;padding-bottom:25px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
      <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr style="border-collapse:collapse">
      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:270px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td class="es-m-txt-с" align="center" style="padding:0;Margin:0;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Arial, sans-serif;color:#fec903">Contact Us</h4></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td class="es-m-txt-с" align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A5A29B;font-size:14px"><a href="tel:(84)367907374" style="color:white;text-decoration:none;">+84 3679 0 7374</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A5A29B;font-size:14px"><a href="mailto:${process.env.NEXT_PUBLIC_SENDER_EMAIL}" style="color:white;text-decoration:none;">laptopdienthoai1&#64;gmail&#46;&#65279;com</a></p></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
      <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr style="border-collapse:collapse">
      <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:270px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td class="es-m-txt-с" align="center" style="padding:0;Margin:0;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Arial, sans-serif;color:#fec903">Social networks</h4></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;padding-top:10px;font-size:0">
      <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse"> 
      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a href="https://www.facebook.com/violetoniongarden/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img title="Facebook" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Facebook" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a href="https://github.com/minhtri06ltr" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img title="GitHub" src="https://wotgel.stripocdn.email/content/assets/img/other-icons/circle-white/github-circle-white.png" alt="GitHub" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
      <td valign="top" align="center" style="padding:0;Margin:0"><a href="mailto:${process.env.NEXT_PUBLIC_SENDER_EMAIL}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img title="Gmail" src="https://wotgel.stripocdn.email/content/assets/img/other-icons/circle-white/gmail-circle-white.png" alt="Gmail" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
     </tr> 
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      <tr style="border-collapse:collapse">
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0;font-size:0">
      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr style="border-collapse:collapse">
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr style="border-collapse:collapse">
      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr style="border-collapse:collapse">
      <td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=tourism&utm_content=trigger_newsletter" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://wotgel.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png" alt width="125" height="56" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      </div>
      </body>
      </html>`;
      break;
  }
};
