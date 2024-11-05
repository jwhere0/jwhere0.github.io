document.querySelectorAll(".code").forEach((button, index) => {
    const tooltips = document.querySelectorAll(".tooltip");
    const codes = [
        "v3UAKVXbwBiUvVnbkVmcgo0V4pdTVujkUEDDGWPc3909ss7OVtUFJ8IgAOAEBFJQGnA4mQ2OXCSJiIC42BDPW2BZ94v7EXfsfbJLL3SNRXQEde5btxf98tMRHTipjjENZzbgMVhofwUvf5bN6kNG0vsRx3hZHpONQH5Gohi0Z6YzPD9DmvJKs73WMcvHHfjNGr1jmhKi0PaeN13D77WmMtyazGhxOVcLk6Ul4ep7tH5ejU7RUj95ccPsY2c8opfx0cciR8JzwmZfuTSApBtgzfStvOJg0KHzwf7zfFPSYPfxuRsWkezW84xYOXdfoTMIBk6nVqm0Xp3begWZLlBpeYMXjhv25v59M4Molg4t0eQdluAqr0DAdJ236aXB66t2qgEcaCigkmBNBaE0AoGIFkAiBRg25kERfVSD6ytUXNeC0rUiXqkGANCaCkAiBRb33eRFVSNQhnT1BouSjQdEWsSNsvGWTxaKWTAxgIsvViBlWEZ3hgYQEIFUD0wWLuzqMCLuD9ESKV1tUqeZV9M5VxZlfeY9JV91BocIUeULf2VuGvpXBaPolg2Xdw69LjuKqUEfleeliTdEvvlPEwSmdP59gao7VjecPaiXwdxJH9d1ob7PjcgpOjeY7e7Y1BWjTsfto59YaV2WuxurRn1wjR8cKI2puK7qZvpTBlqN89ZDfmth7ZD1ANUD02WDQeoOfeKJGkASB1ANEkALEYhALEYhAL4KmzK9J0HYC9GmQfFTIr2Q23WTepNfzRf4b95mebivafuaeHGzftaeDxtfLq3CO8sUzzvIeGbs6R3flTkZSSC6V1fZaveXClkagifP3qFkhNRcfJO6zXwfAf1leoSlfdf8wefnNefBabqqCE",
        "v3XAIVWY2VmbgYCIFFmc0hGIKdF4pdVUvkkTDDEAGubJLL5XZSGGglwOWkJ7Y3cFoKqiLEhMnBuBcOZQSt8fISVO1neqdb3yKIqUe76t6flPLOr9Di82bfpMW1kc1HrjEotNnyaEZg14krOTeoBUeqdfR9O63jje3yXsVfXW00e6WvUTvayWhyKKZr13fmVuVrv81N0rMvb9RJn1tVII10fLDKRW5eYRueiIp87CT53Ve5non7VElM1m3M9Zay0FTW8Cmesp5e6MReZygz9rIhufudXRGNLZdX6X7qe1WldvOpyL1RtcrsuJ03q101926fIfuFnj13UqFxmOg2QroF0MaClQR0IKgGQeIHSRSfsKXt9WW10a9Zo1XTHQL77eXy0mmQJUENiCoBkH5QKSQnq5c5LqHNFrKXNK6donQvH9B0HRnQHRPgOg2QroF0MaClQR0IKgGQeIHSRipRyqQv2QroF0MaClQR0IKgGQeIHSRt8z25k3DVy0Vy5We7TSuYVe1ld6pq7n1q5LrPvpyuw81RTatepMP7M4kF176YvyfOvd2dRB0YteuNvTM6xeqN6j9qM6TyFbX4W98bxec20CaGNhSoIaEFQDIPyhUkgO0rRTboV0CaGNhSoIaEFQDIPyhUkYyvvfZRboV0CaGNhSoIaEFQDIPyhUktfp8PoPMvZX"
    ];

    button.addEventListener("click", () => {
        // Copy the corresponding code to clipboard
        navigator.clipboard.writeText(codes[index]);

        // Show visual feedback
        button.style.filter = "brightness(0.8)";
        tooltips[index].style.visibility = "visible";

        setTimeout(() => {
            button.style.filter = "brightness(1)";
        }, 100);

        setTimeout(() => {
            tooltips[index].style.visibility = "hidden";
        }, 500);
    });
});