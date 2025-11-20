// Define every level here
//Encore information will only appear if entered
const LEVELS = [
    {
        name: "Jump Rounder",
        desc: "A fun and twisty track.",
        //Image
        img: {
            standard: "JumpRounder.png",
            encore: "JumpRounderE.png"
        },
        //Track code
        standard: "PolyTrack14pdLQeYbFFIAK4vEBBhloCSQkok2BNdrkUshXne1PvZOzm6cu7qbVH2jggYSaaYSNwgR2g7eZTH8080GuwLtdSZFAnKmvn3ezD24hPeOzwmJeJemGsRP5uLSOLakbfMiP8e7jMRkC0XFoqCFrqQXVTTihMqVfScAXfRE9SsnOBlWFnzbLeoNK9KD0mm3ewnKJbGGfbj8wWxNMf2iKVmDSmuzW0P6ajnHu3v7jhXZtMlwg8hQNESOLXBfNz9sCE4sH6ij04tbXnudBVBYNqzKU5W6X4py9f04VADD4bzTL7ujjltt0RUTUdnXnX94FzaK4mJReLY9Tf89PXDF1nwwpnFp9BjFuy1NA2K0yIRAUH9W7WmeT854FDoecaG5t5hoFLYihFwZheU4wJpxoHUWPUxXpnox63nyqTfY8g1Ct4jbfPSCkvcgClb5Xj7Gs3kunFVe8jRnY9kXGfZSqWdDtteiT4zUwHyxWle3Fn8XVmtfOf2vRlPVdLgLrnF1PXi8LTgr2gvOAYRZSDxBcG69rt9pdeGX1eMaWark0RbjbQwBwr67aSXolmZs4v4TrevbeyA3RZrbVtWIwatxpHhe7xRrLb543T7n6SqWNt3P2fWIessQmn2VqTdv3PWmhuJUSjrELb0cHzarxDPbSfTxuyfG0fb9qfttufHCeBohI6vHreLVRhRU1DUnrL20ClhDreuAFEELCQtBxFke5xzV7CIj4RNNaJ9xpENxgiUGRcme61Z5vXMH5QNFykp6ObJa9tICK05ozWGBbfa9HAFjFwD",
        encore: "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"
    },
    {
        name: "Hell",
        desc: "A difficult tightrope track.",
        //Image
        img: {
            standard: "Hell.png",
            //No encore image
        },
        //Track code
        standard: "PolyTrack14pdBB3tdCCCAAAerUDkSvcKaI0ydgJUeudMVgZmKHyf80vvv7f6BtgYxJYMO7zPWXpMsykXWZZb6uMf4ae7zwYfDubhtwqA5th2UypoBLm7bhI0Y6lwI1cqUt3XHJQvtL89JT4VIMB67E7mcVfpDJSBxhljypYyzMI4lQeXNbppWsnHYjvADmX4GQ6JwT5LyxrcdOyp3fulVUebjz1kvttGoaYyxM2Z4mj6OWqmHdfh2fxfKBrdNFe6hAKqGYCh2qkV0f1oVKNB",
        //No encore code
    },
    {
        name: "Gecko",
        desc: "A balanced track with some wall riding.",
        //Image
        img: {
            standard: "Gecko.png"
        },
        //Track code
        standard: "PolyTrack14pdfoKZpn1GI4rEiFBc8DDYMm9d8NWkM7I2x80HfLXenUpqcsnpqWzounO1sMxBflaOD7Dbb0E2hEDpueiizeHlXjBuBF7jJjq3aML0Tz3Mul6fmSQcbr2b33f5l37Wt63Ykhxn8LQp4q22dhfcNQ6xhgyoSBeIGMDyBvTj5xJq6YMWDf055KWADQMO880ZRqYZQV2lJ41kjMfpGueJXD1CQd0PzpSMnC5xLZ1ZSzseYYRf2E0TeG13MqpKUSjX6gViDrvw3w35D3CEex9DZjSwxhoRVOV2Mg66BeWPlNHiNnI9GnjoxTQPjFmyD3yFMgLcEn4mtLbb7vBP8lKPqQ2IgP2JQEzzD2SBlJ3FT335skZO6CSKj3aiN4vgdrWduro9lMAvLeZtoCAm5eaWm9B8568SWkRJvOKkxy1nRyfB8BINaM2epcUTciVbeHEmAHPEIcemxeBFqxtcoek23xQmPJfyX9VN1lteXkZbxFihu4eM9KLzr4u108gIjihH8vQ5xcoAxcf4SK9eitsEb3y371cST82xsARJPMEJhidHgVhrWWjqljaysfxueawsYTMVFK9HtDPQAXI49fANI8STfePlqTZbwIPxPdYvoUviH3tboLEvd7LgDlNeL4e978evxfSiPQ1JFGJ8ucsWz88J6NX8pcfPSBE6OemOxmZOwwpFnI6KZf23hcD1P4Rqe2HKf587MQGzcNgQgQkGkvPS7wdH1Df4eIm7OlWaHfB6pl5JfZpR7fxs24Juuw5MO8UkJK4DjvVQFI2xQe0cTaryUQ7wNPLpEe2u36hgmWGr7W1KyToRhe6FSJWwXMU2ajBhoeUcHP9xkA9lXqcmTcDBlJUtEFuQNCKURsdE945UwU00cYSd9MXLENmU6LaOt3Fgqt5sQmvRjyrjSqA44o9bJqGbq67hELDxuN1EFQ7X3QTm4kSehcpg0l5KlC1EIIGFZWZwO1kZWduhaf2gNjhWniruPqftMdycT73yUf1TVFRLYRHTVbTND5U1HHSqeGtw5nQHj3Wq8ZotIbvnZvz4m4bKEJXm9Vm2vVJ69VJPPTKpIfVLhK0chpBadtgfYWT2u7768sct9tnJA4dD6RmHUMr1Nx01EuCmwrGSdECec9Ja8VHMbHZydFlM3bbka5btx0JYuB6EKWSwtFgnof4cOvRd97hNraePAT7vbXkfU5XP1aLc9XN0z3zP15z3NAmBl9wyFqZsfEEgZBPPP2vgPnIc3QvEs7PyZflAvClfxPM1t1GyOrCXOIPLkV3WvxUURCTrV7R3y9rWnEUeBtcYnkiTQjOzq9qZe0gnfxe7mUlhjXC37PGO4ZvYvhkeUffv2Vw77QL0EDb0ezZ0vA9pfacddufQqQphVxuh5QBpLYjeqQCfH1ejSrjyifbfVz6AWT09ehXfMtSefWffx7gY8s2wqTnro2v3GKanSfj3qIxfHBgZZPX4rtKTm4e52XhfYeU4fiFv2VrMqkKYCa7xH6woy77VBa3tk2r8e5XGp62fdNFtjwaZ4IbxoceOfsfkZ8wav5FlzCFEmTu4kHegGJHRtT0EMXmt7zR7CuGD0ZcgQeU7IWLnlPzRmW0o2WK2sLA5xEIfOVfL0aivlxeFYYyRbwVC383szBsflOWTM1IinCkmjIBIIdBxqBTLJSUAvLEoeYHVkCmMWpFJWzP5t0oMIs4vBbpsqb1Gp3ayMgK29qfGIeKrJBKNfyn35OnGFeFiLcmsjdiQYLqnXOxH0zepxuNMoRxpsJAOg6TZGn9axQ8WgRIO5U1fxe4kaAbtXEPa31ZzZ0Z9BUWfEIuWatLatj9IjnFtf1HieSwsI2FjY10TDd2xsTI3m51LMm2lQzkom3N88z3cCPKGI6838ixZsOwniJb3kgcySVZyQXAAGx9QCGgYOC41LPxY38GIC5cDoLP49XAisFP9B"
    },
    {
        name: "Tail Chaser",
        desc: "A track where you return under the start.",
        //Image
        img: {
            standard: "TailChaser.png"
        },
        //Track code
        standard: "PolyTrack14pdvTeYpZFJHK8rEemlFQVk4pAKc7gkMpw7tP99f7d6eEziJieiOieCpVKkepzRKxqo2FPSzMopZ5AJx3WB73O8b1xuUpeTktAWRRQDgsv2nHfepq3DWF2D5GFkEQHoXTY08aBc9FqJ3qwqY7fLifeO3HMKu58ZTTc0IuidOaaXMfdeh45YsbPeN2edHyFzAweMx7uNYe6UUCjJZW5xw391FMakjXXioJf7O8Ihlgwxy04PjGfJQQPoBPUYBKmiI1dwyU3vFs6pwjConyZ2uIxUe5fUfkKfnWyKAypIoHWLMEbELKzW1bK6qgfkcsnbculkIF2vwWiIno1U2tn39kGcYfhZ3fKD6D6NK0i4Z4WTIqIFz6g2IN5HPtqtSR7CQIrOxNZezW6OceDnZfigw5iTBsbs2JPCiq4ZLw2SoTvt9G4IyCbSShxVE1YQqPZ9lhVlERtDxBHSi997Z20M7ozdZ2pleHvMCstCvfYCgYw3SfgzW20Cn4Hvd2MXkrTeQcQxOthQVZ57De9O1t7e79wefirJeHi4usr57Bl1KduniJDwu8z71EXwen7yY5O589X7K0mxwaKIpZ74PK2TMnsFqF2NG9GnP0riI5UsM5wRe5517fCLNV6xpfD3zihwFLzIsDlu65DOPQ2LdWHiaJrIU1BnfCEnwP0xmQWGICxl2g5DN13ucvDQmXF5FnoUcdu96ZfTESHiMJYJIhzQwZxVnC3c4unKKiTQJtvu2hXgNxRq39VvFvgHUzRtRRKcke8uBuFlR05IvIkP8W8ZbLmyf39gYuJxUgD9IdiRMK5pyA4HmnwW7TfRwbKkCeLovexbqhZWnzCdCIYdZfWjveBoqmR5I4M4QSIBai0WA0lznhJgtn5nvSkzPyefaAjecsvePMt67gPEbsFkYGZ0ZeA93N1VfqbtWlg68z6DEjK0emMfj2EztHBJKR1hfrFe28M72hNTG8F1XzzIoU3h6i6fyMmXuLWCg6UVmHPpKJTe6Pdz209q0zfvVSc3So8f4gdD9PFbenpPj9gtYnK3HuvclAH1nrMeSc3kirnPcefXrtgmpPcVprAfKefGoHgqS2tKRf19I0Sfv7e2kJvO5iBdXTYXL5vOJEf9WI93vU92MXcvdVbO34vDCbdTPdFLDR07X4VxuF8SU4gIidmIqUfiXX2mLdqxXzjo0lUsQoawlbbBJELcitBxd9QUrCXiIpPu46InQjiflDHvNvwYVH8ZvoiE7AhxkRAKAxiehoJgpEPE4otWN5bzeALmuPEBw6PpBwZBm52cK9YkR6dbqLx7SyzEz24Az8RxgUCwZWnTjIZer1cyYVLzQ8lgYb2ufNkDL1cbPKitmys3ZwyuQjeu4g4VwewNxMWuiLq5L14ifi9jSutCtk76V277g1aUawrRUzkb3lLD7YWIOZdyinfNmbJEea24SK3gmtcPZfox1Z063zpL0gNu3n1EDXcjTccGVrDkS33a2ke67mEJazbtc7UIGTCaBZv1dy3KtJbAkq4f8tWkP4RCyexteaggc7tAJbnUauXY6kNWedRl9luAWWx8mvXefAgczx6d"
    },
    {
        name: "Darkroom",
        desc: "A dark, tricky, hateful track.",
        //Image
        img: {
            standard: "DarkRoom.png"
        },
        //Track code
        standard: "PolyTrack14pdFTdstrCDE7XCwUXmESgLN7QH2RxOUToHjf1fl3OpzItYGpJztuEZyKXDvfhhBOTh2ZqIeWq4SvfzL6fL9HO71DOb6N7HL39f0OwflAf27fb7HVJG8ZR4mt4bLi0roMsGcX2uNC3HirhscDyYHpDpeN5rCBfwRlRq7yVJqyLHFtEJiBBAUnOcYZ3GwSUDxLCdC2TH28bekXnOeNbUo6zTrw8ZYefFadd2sbHMrqLcZuvcT3H1auGa4Fe7H5rdyQDNoMGLOM2Iqhdx3LW2kGfiMSTjfNykcTXv3t9aVBLhrrmbrzSRMau8Naa8wUH7qDfE8bSCnoWEz5aJ9aVVJS1ID3Yfke6qpy3EuDLwfEa0EfMw0KzEmQBDdad6ZIBpgjreY3Lz2mQOFXH7yfxHet3r6H06Rv71wD29tLbZWjonwCaQeXqXkueUvHpI3VWWEuJ9YemH2X7z2uXhDfGjYQYQq9BcIziG0WxNlqgxyRKVnaxnxvl3Xupls7L5C9PrG8lELCQWiVBCC3Vyt2k8KpwdQyeUOwpXAse7JcQwYOM37nKPgzeWFxlSSBejYGMfJfxeb5Boiu9nnqj4e9cBtu9esZ0bc2fFyuSseoQ8zkLvbhDeY9nDeiBDVrX2cJq9VzVj3fmeSoRQYirvXYyXXxgAHLx77njp56LCRekmytNpXmf7cMFIsZxC1s5dgeY4f2oqmdnJraLp1y5e1TSSOFkzeyConabVHgTc1niz7Kyjd4L7H2fUomAubkNSfx0ZQxxkzdQb2Bfvdgf9uKVxxuVWfixyJM0B83O70LxLK7mGemvZZBbA7beLc1U3DTzF2mGJOSa0jPp2PdSahr30y8EeC0X1feVDtsHyfGw1eR2u6NsaSNifZokudDg9YkkPjC1muJXM8m6M8RfyTUiD5J9p6CWXwPPfJ2HlMpq8VhaWxxPtDYug4xZzpEM2lVvH5xeClNgSGjqJRDq5kea9v27tJlLKejJRdzoadrISuMeEXeSOHVaBGq9nCRfKzMfb04s2UvfgnYDc0pcfVC4jmqQikl6PLSj9qBCY83FNDMkyEH2kxROIGu6K5G2801I8rkj74xzhaIRkoOIRPFsHgxTvUC64NYEn5UU3DlfKzeArhNL4aKxiVtW9HerHjISZbjDvGlwaNX6XgeEKsKCn3WLU6UqM37nUffdl8zH7HfPQa1Zwi3NdhjnMHiLL5aX6WcXTawfo7MEmTNjzsNdeLMsJW80Hf9VTr9U4BqrHxHHeiPnPiTbBmaPwn7vaq065E8SZ8dT2w1c7yIDyxo06U2ZTgnYTwDSaopfaS2EMAjgiv5umyiflhtFtw1FECCfYq7gNvIt5p77gpXNKVBKZ8gu3HeppfiC1rG004L2Xi7oMysjF57cPZsasL74GGIfFKauWNdGYlAcETpfK5Wtbs3fdDYB1IiAzlFcADFUSDcNBbyv2U4pAYvDqLbiuCWww3LKiKi4Sz2OVyF9qWewrfHAEBlf8"
    },
    {
        name: "Speedghetti",
        desc: "A simple track where speed is key.",
        //Image
        img: {
            standard: "Speedghetti.png"
        },
        //Track code
        standard: "PolyTrack14pdPUl1syqDE8vkQAJ8oCihlIIye3kQiACisv8rf1jfOnbVTVTVZ6Md3prKx4MLHkkXZ2pTIErXyWimc4lnfrP1vdyI6aegTuFFdHyENpmkieFNHeW9tgS01FXF3VNdtIoJJ36TRfBxoiZjwnii2kZGrY24jTs5P9hN7Jg8b0ETmBZi5SRTUW2KDOdSsHx23NZy7UOwkRVs8s76sOhNBPho5jEnRVQR6sN5C1loRPC3EyEuBDhnh3J22qpLOFR5ToXFem3m9uE9i7puTxrQCa9FSz1iivLSImUF4ttNzNlieNCS8FrqCm7AMnw9DjdL2E1RNQu0C9DtXfGQ3zUsfMKemYiNro4esI3axS5tt5Qi77yh9eTf61MlJKsDQHgKsbTPHpZUnMdN78aUKP7CKdklavSAp7LTsGPm2nrnRgeMdkNqd8jmWvEK6JkTt4NEbX5oyDEvZWGG0btKBQyp2LYUzM45eOU4KgZz2RzXo2IBnbOjIuzMwAPWBla3mUfSzSTh1dIK2gaDBQuE3yJW4Oi14MgrEyRzbripqzuxq1uaeiPp2IwHWZOsbo65ApLseVLvuKDwa3uVLeU9aVqIZaw2pLWpMeBNQWw7V79jlPlECliVUJ0DcI9tDiIhxPzuhyk0TQg2SjeF4O9Nz1f1Jv6BXewFnbWnFpnmpGfkXTRifQvz4CDfLYTHdKe3DFbteWpesezXXkPLGCOceyp2YeZjVr4fuB2Ckb08XM3SvVf43l0LJuifHey7g9PeuwAXc0ngsGGfLmOzIxzz61X12Cmew8rzqa9aUe9anr80VfLhepCNfbBO8jDJHKjVCwS0e914AcuLejCJfr4Ksnx2f6PoGgTnXOYGwUCehm2xL7Baa4HLtdZf4ujebpHbf1HmWvteDVNE1slfIoqkdafQBXbkrGeXkKfi8OnhfjfGAogLxfntzSSui3aer8kQG872nOr8vgVDLYW5ashbfbw5WJS9S8XeVZjWWg9p0ffhsXyd4uGeFwOKqdohnhnaClPKr1R2BWmC75iCrkXniGUsM7k1CsLhHT0ZKOvI3TCnZLybsMJGUmddSKGqDvCPQOxfhGu83UK7qzC9qqxfZr4v2qNl16f9rR5n9Rt21mfJ93Pe1o0bJ6uMnMQkUb5P5yHJL1eWV2uMkB4dQwP3ennehEVeBVjpzDBihpzjt4hLC8tQzPfsAOpWoruHgncS77Tm7ZHL48ufc1pEfbkWWolIDRYMOv6fHCtmbXF"
    },

];

// Build level cards automatically
const container = document.getElementById("levels");
container.innerHTML = LEVELS.map((L, i) => `
    <div class="level">

        <img class="pic" src="${L.img.standard}">
        <h1 class="name">${L.name}</h1>
        <h2 class="desc">${L.desc}</h2>

        <div class="mode-buttons">
            ${L.standard ? `<button class="switch standard active" data-i="${i}" data-mode="standard">Standard</button>` : ""}
            ${L.encore ? `<button class="switch encore" data-i="${i}" data-mode="encore">Encore</button>` : ""}
        </div>

        <span class="tooltip">Copied track code!</span>
        <button class="code" data-i="${i}">Get Code</button>

    </div>
`).join("");

// Mode toggle logic + image swapping
document.querySelectorAll(".switch").forEach(btn => {
    btn.addEventListener("click", () => {
        const levelDiv = btn.closest(".level");
        const siblings = levelDiv.querySelectorAll(".switch");
        siblings.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Swap image based on selected mode
        const i = btn.dataset.i;
        const mode = btn.dataset.mode;
        const imgEl = levelDiv.querySelector(".pic");
        if (LEVELS[i].img[mode]) {
            imgEl.src = LEVELS[i].img[mode];
        }
    });
});

// Copy track code logic
document.querySelectorAll(".code").forEach(button => {
    button.addEventListener("click", () => {
        const i = button.dataset.i;
        const activeModeBtn = button.parentElement.querySelector(".switch.active");
        if (!activeModeBtn) return; // nothing selected
        const activeMode = activeModeBtn.dataset.mode;
        const tooltip = button.previousElementSibling;
        const trackCode = LEVELS[i][activeMode];
        if (!trackCode) return;

        navigator.clipboard.writeText(trackCode);

        button.style.filter = "brightness(0.8)";
        tooltip.style.visibility = "visible";

        setTimeout(() => button.style.filter = "brightness(1)", 100);
        setTimeout(() => tooltip.style.visibility = "hidden", 500);
    });
});
