<div id="footer">
	<div class="footertop">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                        <div class="careerForm">
                                <div class="send">
                                <?php
                                if (isset($_POST['sendCV'])=="sendCV") {
                                    $email_to = "chit.eureka@gmail.com,rambut@gmail.com ";
                                    $subject = $_POST['yourname'];
                                    
                                        $message = "
                                        <div style='max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f2f2f2; line-height:1.4; font-size:14px; border:dashed 5px #ddd;'>
                                        <div style='border-bottom:solid 5px #e23720; height:73px; margin:0 0 20px 0;'>
                                        <img src='http://staging.eureka.id/jakpro/assets/themes/jakpro/images/logo.png' width='200'/>
                                        </div>
                                        <table width='100%' border='0' cellspacing='0' cellpadding='10' style='background:#f2f2f2;'>
                                          <tr>
                                            <td width='100' valign='top'>Nama Tamu</td>
                                            <td width='10' valign='top'>:</td>
                                            <td valign='top'>".$_POST['yourname']."</td>
                                          </tr>
                                          <tr>
                                            <td valign='top'>Email Tamu</td>
                                            <td valign='top'>:</td>
                                            <td valign='top'>".$_POST['youremail']."</td>
                                          </tr>
                                          <tr>
                                            <td valign='top'>Judul Pesan</td>
                                            <td valign='top'>:</td>
                                            <td valign='top'>".$_POST['subject']."</td>
                                          </tr>
                                          <tr>
                                            <td valign='top'>Isi Pesan</td>
                                            <td valign='top'>:</td>
                                            <td valign='top'>".$_POST['message']."</td>
                                          </tr>
                                        </table>
                                        </div>
                                        ";
                                    
                                        // Always set content-type when sending HTML email
                                        $headers = "MIME-Version: 1.0" . "\r\n";
                                        $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
                                        
                                        // More headers
                                        $headers .= 'From: <'.$_POST['youremail'].'>' . "\r\n";
                                        if(mail($email_to, $subject, $message, $headers)){
                                            echo "<div class='overlays'><div class='messagebox'><h3>Terima Kasih, Kami akan segera mengubungi Anda.</h3></div></div>";
                                        }else{
                                            echo "<div class='overlays'><div class='messagebox'>Maaf pesan tidak berhasil terkirim, mohon coba beberapa saat lagi.</div></div>";
                                        }
                                }
                                ?> 
                                </div>
                                
                                <style type='text/css'>
                                #contact_form_holder { 
                                    font-family: 'Verdana'; 
                                    font-variant: small-caps; 
                                    width:400px;
                                }
                                #contact_form_holder input, #contact_form_holder textarea { 
                                    width:100%; /* make all the inputs and the textarea same size (100% of the div they are into) */ 
                                    font-family:inherit; /* we must set this, because it doesn't inherits it */ 
                                    padding:5px;
                                }
                                #contact_form_holder textarea { 
                                    height:100px; /* i never liked small textareas, so make it 100px in height */ 
                                }
                                #cf_submit_p { text-align:right; } /* show the submit button aligned with the right side */
                                
                                .error { display: none; padding:10px; color: #D8000C; font-size:12px;background-color: #FFBABA; margin:0 0 10px 0;}
                                .success { display: none; padding:10px; color: #044406; font-size:12px;background-color: #B7FBB9;}
                                .sukses{ display:none;}
                                
                                #contact_logo { vertical-align: middle; }
                                .error img { vertical-align:top; }
                                .messagebox{ text-align:center; text-transform:uppercase; background:#f2f2f2; border:solid 1px #ddd; margin:30px 0; padding:40px;}
                                .messagebox h3{ margin:0;}
                                </style>
                                
                                <script type='text/javascript'>
                                    var a = Math.ceil(Math.random() * 10);
                                    var b = Math.ceil(Math.random() * 10);       
                                    var c = a + b   
                                    
                                    function DrawBotBoot() {
                                        document.write("<input id='BotBootInput' placeholder='What is "+ a + " + " + b +" ?' type='text' maxlength='2' size='2'/>");
                                    }
                                    $("#careers_form").ready(function(){
                                        $('#send_message_careers').click(function(e){
                                            e.preventDefault();
                                            var error = false;
                                            var name = $('#yourname').val();
                                            var message = $('#message').val();
                                            var email = $('#youremail').val();
                                            var interested = $('#subject').val();
                                            var BotBootInput = $('#BotBootInput').val();
                                            if(name.length == 0){
                                                var error = true;
                                                $('#name_error').fadeIn(500);
                                            }else{
                                                $('#name_error').fadeOut(500);
                                            }
                                            if(email.length == 0 || email.indexOf('@') == '-1'){
                                                var error = true;
                                                $('#email_error').fadeIn(500);
                                            }else{
                                                $('#email_error').fadeOut(500);
                                            }
                                            if(interested.length == 0){
                                                var error = true;
                                                $('#subject_error').fadeIn(500);
                                            }else{
                                                $('#subject_error').fadeOut(500);
                                            }
                                            if(message.length == 0){
                                                var error = true;
                                                $('#message_error').fadeIn(500);
                                            }else{
                                                $('#message_error').fadeOut(500);
                                            }
                                            if(BotBootInput.length == 0){
                                                var error = true;
                                                $('#BotBootInput_error').fadeIn(500);
                                            }else{
                                                var d = BotBootInput;
                                                if (d == c) {
                                                    $('#BotBootInput_error').fadeOut(500);
                                                } else {
                                                    $('#BotBootInput_error').fadeIn(500);
                                                    return false;
                                                }
                                            }
                                            
                                            if(error == false){
                                                $("#careers_form").submit();
                                            }
                                        });
                                    });
                                </script>
                                <form class="submitcv" id="careers_form" method="POST" action="" enctype="multipart/form-data">
                                    <fieldset>
                                        <div class="rows">
                                            <input type="text" placeholder="Your Name" value="" id="yourname" name="yourname"/>
                                            <div id='name_error' class='error'> Please enter your name</div>
                                        </div>
                                        <div class="rows">
                                            <input type="text" placeholder="Company" value="" id="company" name="company"/>
                                            <div id='company_error' class='error'> Please enter your Company</div>
                                        </div>
                                        <div class="rows">
                                            <input type="text" placeholder="Email" value="" id="youremail" name="youremail"/>
                                            <div id='email_error' class='error'> Please enter your email correctly</div>
                                        </div>
                                        <div class="rows">
                                            <input type="text" placeholder="Subject" value="" id="subject" name="subject"/>
                                            <div id='subject_error' class='error'> Please enter your Subject</div>
                                        </div>
                                        <div class="rows">
                                            <textarea placeholder="Message"  id="message" name="message"></textarea>
                                            <div id='message_error' class='error'> Please enter your Message</div>
                                        </div>
                                        <div class="rows">
                                            <script type="text/javascript">DrawBotBoot()</script>
                                            <div id='BotBootInput_error' class='error'> Anda salah memasukan nilai</div>
                                        </div>
                                        <div class="rows center">
                                            <input class="button" id='send_message_careers' type="submit" value="SUBMIT"/>
                                            <input type="hidden" name="sendCV" value="sendCV"/>
                                        </div>
                                    </fieldset>
                                </form>
                        </div><!-- END .careerForm -->
                </div><!-- end .col-md-12 -->
            </div><!-- end .row -->
        </div><!-- end .container -->
    </div>
</div>