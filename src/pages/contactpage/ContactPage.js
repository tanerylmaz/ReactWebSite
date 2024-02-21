import React, { useEffect, useState } from 'react'


function ContactPage() {
    var od = [

    ];
    useEffect(() => {
        od = [
            {
                name: "Taner",
                surname: "YILMAZ",
                email: "yilmaz.taner.1100@gmail.com",
                message: "Deneme yapıldı."
            }
        ];
        setDatalar(od);
    }, []);
    const [datalar, setDatalar] = useState(od);
    useEffect(() => {
        od = datalar;
    }, [datalar]);

    function SendForm() {
        var name = document.getElementById("name").value;
        document.getElementById("name").value = "";

        var surname = document.getElementById("surname").value;
        document.getElementById("surname").value = "";

        var email = document.getElementById("email").value;
        document.getElementById("email").value = "";

        var message = document.getElementById("message").value;
        document.getElementById("message").value = "";

        datalar.push({
            name: name,
            surname: surname,
            email: email,
            message: message
        });
        setDatalar(datalar);

    }
    return (
        <div className='pages' id='contactPage'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <form id='contactForm'>
                            <div className='form-group'>
                                <label className='form-label'>Adınız</label>
                                <input id='name' className='form-control' name='name' type='text' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Soyadınız</label>
                                <input id='surname' className='form-control' name='surname' type='text' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Email Adresiniz</label>
                                <input id='email' className='form-control' name='email' type='email' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Mesajınız</label>
                                <textarea rows="2" id='message' className='form-control' name='message' />
                            </div>
                            <div className='form-group'>
                                <button onClick={SendForm} className='btn btn-dark' type='button'>Formu Gönder</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-md-6 offset-md-3'>
                        {
                            datalar.map((veri, i) => {
                                return (
                                    <div key={i} className='contactList' style={benimStyle}>
                                        <div className='row'>
                                            <div id='titleArea' className='col-12'>
                                                {veri.name} {veri.surname} - {veri.email}
                                            </div>
                                            <div className='col-12'>
                                                {veri.message}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
var benimStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    marginBottom: "20px",
    color: "black",
    padding: "10px"
};

export default ContactPage;