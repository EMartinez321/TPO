function showLocation(location) {
            var iframe = document.getElementById('location-frame');
            if (location === 'location1') {
                iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1214249837435!2d-58.44225362453955!3d-34.55048087297338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb4358abbe099%3A0x6af5a1c34874f843!2sMendoza%20530%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697552025753!5m2!1ses-419!2sar';
            } else if (location === 'location2') {
                iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6184049609187!2d-58.390635924536596!3d-34.613809672950644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadbf05a8261%3A0xdafb4685f1569180!2sAv.%20Belgrano%201540%2C%20C1093AAQ%20CABA!5e0!3m2!1ses-419!2sar!4v1697552451492!5m2!1ses-419!2sar';
            } else if (location === 'location3') {
                iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2874375688784!2d-58.377489124536226!3d-34.62217587294765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2c5a2b0e05%3A0x840ce3fa97a13c64!2sAv.%20San%20Juan%20640%2C%20C1147%20AAR%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697552668021!5m2!1ses-419!2sar';
            }
        }