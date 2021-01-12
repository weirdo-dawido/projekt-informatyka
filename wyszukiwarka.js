document.addEventListener("DOMContentLoaded", () => {
const bazzaDanych = {
    "vie": "waw-vie.html",
    "bru": "waw-bru.html",
    "msq": "waw-msq.html",
    "sof": "waw-sof.html",
    "boj": "waw-boj.html",
    "var": "waw-var.html",
    "zag": "waw-zag.html",
    "dbv": "waw-dbv.html",
    "puy": "waw-puy.html",
    "prg": "waw-prg.html",
    "osr": "waw-osr.html",
    "lca": "waw-lca.html",
    "pho": "waw-pho.html",
    "cph": "waw-cph.html",
    "bll": "waw-bll.html",
    "tll": "waw-tll.html",
    "hel": "waw-hel.html",
    "oul": "waw-oul.html",
    "cdg": "waw-cdg.html",
    "ory": "waw-ory.html",
    "lys": "waw-lys.html",
    "nce": "waw-nce.html",
    "mrs": "waw-mrs.html",
    "ath": "waw-ath.html",
    "skg": "waw-skg.html",
    "kva": "waw-kva.html",
    "cfu": "waw-cfu.html",
    "chq": "waw-chq.html",
    "her": "waw-her.html",
    "jtr": "waw-jtr.html",
    "jmk": "waw-jmk.html",
    "rho": "waw-rho.html",
    "bcn": "waw-bcn.html",
    "mad": "waw-mad.html",
    "bio": "waw-bio.html",
    "vlc": "waw-vlc.html",
    "alc": "waw-alc.html",
    "agp": "waw-agp.html",
    "svq": "waw-svq.html",
    "pmi": "waw-pmi.html",
    "tfs": "waw-tfs.html",
    "fue": "waw-fue.html",
    "lpa": "waw-lpa.html",
    "ace": "waw-ace.html",
    "ams": "waw-ams.html",
    "ein": "waw-ein.html",
    "grq": "waw-grq.html",
    "mst": "waw-mst.html",
    "dub": "waw-dub.html",
    "kef": "waw-kef.html",
    "nqz": "waw-nqz.html",
    "vno": "waw-vno.html",
    "lux": "waw-lux.html",
    "rix": "waw-rix.html",
    "mla": "waw-mla.html",
    "kiv": "waw-kiv.html",
    "ber": "waw-ber.html",
    "ham": "waw-ham.html",
    "haj": "waw-haj.html",
    "dtm": "waw-dtm.html",
    "dus": "waw-dus.html",
    "cgn": "waw-cgn.html",
    "muc": "waw-muc.html",
    "drs": "waw-drs.html",
    "osl": "waw-osl.html",
    "svg": "waw-svg.html",
    "bgo": "waw-bgo.html",
    "trd": "waw-trd.html",
    "gdn": "waw-gdn.html",
    "krk": "waw-krk.html",
    "ktw": "waw-ktw.html",
    "wro": "waw-wro.html",
    "poz": "waw-poz.html",
    "szz": "waw-szz.html",
    "lis": "waw-lis.html",
    "opo": "waw-opo.html",
    "pdl": "waw-pdl.html",
    "fnc": "waw-fnc.html",
    "svo": "waw-svo.html",
    "led": "waw-led.html",
    "otp": "waw-otp.html",
    "bts": "waw-bts.html",
    "ksc": "waw-ksc.html",
    "zrh": "waw-zrh.html",
    "gva": "waw-gva.html",
    "arn": "waw-arn.html",
    "got": "waw-got.html",
    "kbp": "waw-kbp.html",
    "lwo": "waw-lwo.html",
    "hrk": "waw-hrk.html",
    "ods": "waw-ods.html",
    "vin": "waw-vin.html",
    "bud": "waw-bud.html",
    "lhr": "waw-lhr.html",
    "ltn": "waw-ltn.html",
    "lgw": "waw-lgw.html",
    "man": "waw-man.html",
    "gla": "waw-gla.html",
    "edi": "waw-edi.html",
    "fco": "waw-fco.html",
    "mxp": "waw-mxp.html",
    "bgy": "waw-bgy.html",
    "vce": "waw-vce.html",
    "rmi": "waw-rmi.html",
    "nap": "waw-nap.html",
    "bri": "waw-bri.html",
    "cta": "waw-cta.html",
    "pmo": "waw-pmo.html",
    "cag": "waw-cag.html",
    "aho": "waw-aho.html",
    "ist": "waw-ist.html",
    "adb": "waw-adb.html",
    "bjv": "waw-bjv.html",
    "ayt": "waw-ayt.html",
    "tlv": "waw-tlv.html",
    "etm": "waw-etm.html",
    "doh": "waw-doh.html",
    "bey": "waw-bey.html",
    "dxb": "waw-dxb.html",
    "auh": "waw-auh.html",
    "rkt": "waw-rkt.html"

}
const searchBarr = document.getElementById("searchBarr");
				const searchButtton = document.getElementById("searchButtton");
	
				searchButtton.addEventListener("click", e => {
					let sel = searchBarr.value;
					if bazzaDanych.hasOwnProperty((sel))) {
						console.log(window.location);
						let destinationURL = new URLbazzaDanych[sel], window.location.href);
						let destination = destinationURL.toString();
						window.location.assign(destination);
					}
				});
			});



document.getElementById('search').addEventListener('input', (e)=>{

    let bazzaDanychArray = [];

    if(e.target.value){
        bazzaDanychArray = bazzaDanych.filter(lotnisko => lotnisko.toLowerCase().includes(e.target.value));
        bazzaDanychArray = bazzaDanychArray.map(lotnisko => `<li>${lotnisko}</li>`)
    }

    console.log(bazzaDanychArray);
});

function showbazzaDanychArray(bazzaDanychArray){
    const html = !bazzaDanychArray.length ? '' : bazzaDanychArray.join('');
    document.querySelector('ul').innerHTML = html;
}