
const ContactMap = () => {
    return (
        <>
            <section className="map-area">

                <div style={{ width: '100%' }}>
                    <iframe title="Contact" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12196.161726854949!2d44.5118165!3d40.1636535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc67e9c728a5%3A0xd9549cbc9ce5efa3!2z1LnVq9W-IDE3INWK1bjVrNWr1a_VrNWr1bbVq9Wv1aE!5e0!3m2!1sru!2sam!4v1728832351905!5m2!1sru!2sam" style={{ width: '100%' }} height={600} allowFullScreen="" loading="lazy"></iframe>

                    {/* https://www.google.com/maps/place/36a+Tigran+Mets+Ave,+Yerevan/@40.1647658,44.5094976,17z/data=!3m1!4b1!4m6!3m5!1s0x406abc67867ca359:0x95759e12de5dd7d4!8m2!3d40.1647658!4d44.5120725!16s%2Fg%2F11c17glxvd?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D */}
                    {/* <div class="mapouter"><div class="gmap_canvas">
                        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=500&hl=en&q=36a Tigran Mets Ave, Yerevan&t=&z=13&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://fridaynightfunkin.lol/">fnf</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:500px;}.gmap_iframe {height:500px!important;}</style>
                        </div> */}
                </div>

            </section>
        </>
    );
};

export default ContactMap;