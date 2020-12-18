@extends('system.master')

@section('content')

    <main class="main contacts-page">
        <div id="map"><div class="mapouter"><div class="gmap_canvas">
            <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23244.437420257153!2d24.070642910864382!3d56.9366946393719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece373d982dff%3A0xc342d8303b60f4d4!2sPromarket.lv!5e0!3m2!1sru!2sus!4v1602848444684!5m2!1sru!2sus" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:400px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}</style></div></div>
        <div class="auth-container">
            <section class="office-contacts">
                <div class="container">
                    <div class="small-title my-4">
                       {{__("service centres")}}
                    </div>
                    <div class="office-cards d-flex justify-content-center">
                        @foreach($service_centers as $center)
                       
                        <div class="office-card">
                            <div class="office-photo">
                                <img src="" alt="">
                            </div>
                            <div class="office-card-info">
                                <img src="{{ asset('assets/img/offices/pin.svg') }}" alt="pin">
                                <span>{{$center->address}}</span>
                            </div>
                            <div class="office-card-info">
                                <img src="{{asset('assets/img/offices/phone-24px 1.svg')}}" alt="tel">
                                <span>{{$center->phone}}</span>
                            </div>
                            <div class="office-card-info">
                                <img src="{{asset('assets/img/offices/alternate_email-24px 1.svg')}}" alt="mail">
                                <span>{{$center->email}}</span>
                            </div>
                            <div class="office-card-info">
                                <img src="{{asset('assets/img/offices/local_parking-24px 2.svg')}}" alt="parking">
                                <span>{{$center->info}}</span>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="small-title mt-5 mb-3">
                       {{__("Feedback form")}}
                    </div>
                    <div class="mb-5 px-5 text-center hide-for-mobile">{{__("You can leave a review, inquire about the availability of the product, or find out something about the repair of device. Whatever you want, we will definitely answer you.")}} </div>
                    <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 m-auto">
                            <div class="call-back-form">

                                <div id="result" style="text-align: center; margin-bottom: 15px;"><h3></h3> </div>
                                <form action="{{ url('/send-feedback') }}" method="POST" class="feedback">
                                    @csrf
                                    <div class="call-back-form-wrapper">
                                        <label>
                                            <span class="errormessage"></span>
                                            <input type="text" placeholder="{{__('First Name')}} " class="auth_control" name="name">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>
                                            <input type="email" placeholder="{{__('Email')}}" name="email" 
                                                   class="auth_control">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>
                                            <input type="number" name="phone" placeholder="{{__('Phone Number')}} " class="auth_control">
                                        </label>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" checked="checked" name="call_back_option" value="{{__('Contact me by phone')}} ">
                                                <span>
                                            {{__('Contact me by phone')}} 
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="call_back_option" value="{{__('Contact me by phone')}} ">
                                                <span>
                                            {{__("Contact me by Email")}}
                                        </span>
                                            </label>
                                        </div>
                                        <label class="textarea-label">
                                    <textarea placeholder="{{__('order comment')}} "
                                              class="auth_control" name="message"></textarea>
                                        </label>
                                        <button class="default-button call-back-form-button" type="submit">
                                            {{__("Send")}}
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="our-team-section">
                    <div class="container">
                        <div class="small-title ">
                           {{__("our team")}}
                        </div>
                        <div class= "our-team d-flex justify-content-center">
                            @foreach($our_teams as $team)
                            <div class="our-team-employee">
                                <div class="employee-photo">
                                    <img src="{{ asset('/uploads/our_team/')}}/{{$team->image}}" alt="">
                                </div>
                                <div class="our-team-employee-name">
                                   {{$team->fullname}}
                                </div>
                                <div>
                                  {{$team->description}}
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>

<script>
$(document).ready(function(){

 $('span.close').click(function(){
    $("#myModal").css('display',"none");
 })

$.extend($.validator.messages, {
    required: "Это поле обязательно для заполнения",   
    minlength: $.validator.format("Введите не менее {0} символов."), 
    email: "Пожалуйста, введите действительный адрес электронной почты.",
    min: $.validator.format("Введите значение больше или равное {0}.")
});

$("form.feedback").validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      phone: {
        required: true,
        number: true,
        min: 7
      },
      email: {
        required: true,
        email: true
      }
    }, 
    ignore: [],
    errorPlacement: function (error, element) {
               $(error).insertAfter(element.prev(".errormessage"));
           },
    submitHandler: function(form) {
      $(form).on("submit", function(event){

        event.preventDefault();
 
        var formValues= $(this).serialize();
  
        $.post("/send-feedback", formValues).done(function(data) {
                $("#myModal").css('display', "block");
                $("#myModal p").html(data);
                $("form.feedback")[0].reset();
            })
            .fail(function() {
                $("#result h3").html('Получилось какое то ошибка!');
            });
    });
    }
});
    
});
</script>

@endsection
