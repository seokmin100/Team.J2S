// Cryptography
document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Cry_1');
    const popup = document.getElementById('Cryptography_1');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input");
    const cry1Button = document.getElementById("Cry_1");
    const flagFilePath = "/CTF_Project_FLAG/Cryptography_FLAG/Cryptography_1/FLAG.txt";
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    document.getElementById("Flag_sub").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    cry1Button.style.backgroundColor = "green";
                    Cryptography_1.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Cry_2');
    const popup = document.getElementById('Cryptography_2');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2");
    const cry2Button = document.getElementById("Cry_2");
    const flagFilePath = "/CTF_Project_FLAG/Cryptography_FLAG/Cryptography_2/FLAG.txt";

    document.getElementById("Flag_sub2").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    cry2Button.style.backgroundColor = "green";
                    Cryptography_2.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Cry_3');
    const popup = document.getElementById('Cryptography_3');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input3");
    const cry3Button = document.getElementById("Cry_3");
    const flagFilePath = "/CTF_Project_FLAG/Cryptography_FLAG/Cryptography_3/FLAG.txt";

    document.getElementById("Flag_sub3").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    cry3Button.style.backgroundColor = "green";
                    Cryptography_3.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Cry_4');
    const popup = document.getElementById('Cryptography_4');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input4");
    const cry4Button = document.getElementById("Cry_4");
    const flagFilePath = "/CTF_Project_FLAG/Cryptography_FLAG/Cryptography_4/FLAG.txt";

    document.getElementById("Flag_sub4").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    cry4Button.style.backgroundColor = "green";
                    Cryptography_4.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Cry_5');
    const popup = document.getElementById('Cryptography_5');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input5");
    const cry5Button = document.getElementById("Cry_5");
    const flagFilePath = "/CTF_Project_FLAG/Cryptography_FLAG/Cryptography_5/FLAG.txt";

    document.getElementById("Flag_sub5").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    cry5Button.style.backgroundColor = "green";
                    Cryptography_5.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


// Web Hacking
document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Web_1');
    const popup = document.getElementById('WebHacking_1');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input1-1");
    const web1Button = document.getElementById("Web_1");
    const flagFilePath = "/CTF_Project_FLAG/WebHacking_FLAG/WebHacking_1/FLAG.txt";

    document.getElementById("Flag_sub1-1").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    web1Button.style.backgroundColor = "green";
                    WebHacking_1.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Web_2');
    const popup = document.getElementById('WebHacking_2');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input1-2");
    const web2Button = document.getElementById("Web_2");
    const flagFilePath = "/CTF_Project_FLAG/WebHacking_FLAG/WebHacking_2/FLAG.txt";

    document.getElementById("Flag_sub1-2").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    web2Button.style.backgroundColor = "green";
                    WebHacking_2.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Web_3');
    const popup = document.getElementById('WebHacking_3');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input1-3");
    const web3Button = document.getElementById("Web_3");
    const flagFilePath = "/CTF_Project_FLAG/WebHacking_FLAG/WebHacking_3/FLAG.txt";

    document.getElementById("Flag_sub1-3").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    web3Button.style.backgroundColor = "green";
                    WebHacking_3.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Web_4');
    const popup = document.getElementById('WebHacking_4');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input1-4");
    const web4Button = document.getElementById("Web_4");
    const flagFilePath = "/CTF_Project_FLAG/WebHacking_FLAG/WebHacking_4/FLAG.txt";

    document.getElementById("Flag_sub1-4").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    web4Button.style.backgroundColor = "green";
                    WebHacking_4.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Web_5');
    const popup = document.getElementById('WebHacking_5');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input1-5");
    const web5Button = document.getElementById("Web_5");
    const flagFilePath = "/CTF_Project_FLAG/WebHacking_FLAG/WebHacking_5/FLAG.txt";

    document.getElementById("Flag_sub1-5").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    web5Button.style.backgroundColor = "green";
                    WebHacking_5.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


// Reversing
document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Rev_1');
    const popup = document.getElementById('Reversing_1');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2-1");
    const rev1Button = document.getElementById("Rev_1");
    const flagFilePath = "/CTF_Project_FLAG/Reversing_FLAG/Reversing_1/FLAG.txt";

    document.getElementById("Flag_sub2-1").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    rev1Button.style.backgroundColor = "green";
                    Reversing_1.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Rev_2');
    const popup = document.getElementById('Reversing_2');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2-2");
    const rev2Button = document.getElementById("Rev_2");
    const flagFilePath = "/CTF_Project_FLAG/Reversing_FLAG/Reversing_2/FLAG.txt";

    document.getElementById("Flag_sub2-2").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    rev2Button.style.backgroundColor = "green";
                    Reversing_2.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Rev_3');
    const popup = document.getElementById('Reversing_3');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2-3");
    const rev3Button = document.getElementById("Rev_3");
    const flagFilePath = "/CTF_Project_FLAG/Reversing_FLAG/Reversing_3/FLAG.txt";

    document.getElementById("Flag_sub2-3").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    rev3Button.style.backgroundColor = "green";
                    Reversing_3.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Rev_4');
    const popup = document.getElementById('Reversing_4');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2-4");
    const rev4Button = document.getElementById("Rev_4");
    const flagFilePath = "/CTF_Project_FLAG/Reversing_FLAG/Reversing_4/FLAG.txt";

    document.getElementById("Flag_sub2-4").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    rev4Button.style.backgroundColor = "green";
                    Reversing_4.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('Rev_5');
    const popup = document.getElementById('Reversing_5');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flagInput = document.getElementById("Flag_input2-5");
    const rev5Button = document.getElementById("Rev_5");
    const flagFilePath = "/CTF_Project_FLAG/Reversing_FLAG/Reversing_5/FLAG.txt";

    document.getElementById("Flag_sub2-5").addEventListener("click", function () {
        const inputValue = flagInput.value.trim();

        fetch(flagFilePath)
            .then(response => response.text())
            .then(fileContent => {
                if (inputValue === fileContent.trim()) {
                    rev5Button.style.backgroundColor = "green";
                    Reversing_5.style.display = "none";
                    overlay.style.display = "none";
                } else {
                    alert("Incorrect FLAG. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching the FLAG file.");
            });
    });
});
