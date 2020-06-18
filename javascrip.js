var cart = data;

var work = document.querySelector(".work  h3").childNodes[0].nodeValue = cart.section[0].title;
var education = document.querySelector(".education  h3").childNodes[0].nodeValue = cart.section[1].title;
var skills = document.querySelector(".skills  h3").childNodes[0].nodeValue = cart.section[2].title;
var tools = document.querySelector(".tools  h3").childNodes[0].nodeValue = cart.section[3].title;

// contacts
document.querySelector(".contacts > h1").childNodes[0].nodeValue = cart.resume[0].fullName;
document.querySelector(".contacts > h2").childNodes[0].nodeValue = cart.resume[0].position;
document.querySelector(".phone").childNodes[1].nodeValue = cart.resume[0].phone;
document.querySelector(".email").childNodes[1].nodeValue = cart.resume[0].email;
document.querySelector(".email").href = cart.resume[0].emailMailto;
document.querySelector(".lin").href = cart.resume[0].lin;
document.querySelector(".git").href = cart.resume[0].git;
document.querySelector(".map").childNodes[2].nodeValue = cart.resume[0].map;
document.querySelector(".map").href = cart.resume[0].coordinates;
document.querySelector(".photo > img").src = cart.resume[0].image;
// section
function createSection(sectNumber, sectName) {
    var itemsBlock = document.querySelector(sectName);
    for (var i = 0; i < sectNumber.length; i++) {
        var title = sectNumber[i].title;
        var subTitle = sectNumber[i].subTitle;
        var age = sectNumber[i].age;
        itemsBlock.insertAdjacentHTML('beforeend', '<span class="organization">' + title + '</span>' + '<span class="position">' + subTitle + '</span>' + '<span class="period">' + age + '</span>');
    }
}
createSection(cart.section[0].items, '.subtitle_work');
createSection(cart.section[1].items, '.subtitle_education');
createSection(cart.section[2].items, '.subtitle_skills');
createSection(cart.section[3].items, '.subtitle_tools');

var coll = document.querySelectorAll('.paragraph')
for (var i = 0; i < coll.length; i++)
    coll[i].addEventListener('click', function () {
        var content = this.nextElementSibling;
        var last = this.lastElementChild;
        var child = this.childNodes[3].innerText;
        var first = this.firstElementChild;
        var sectionOpen = function () {
            content.style.maxHeight = null;
            last.classList.add("none");
            first.classList.remove("none");
        }
        var sectionClose = function () {
            content.style.maxHeight = content.scrollHeight + 'px';
            first.classList.add("none");
            last.classList.remove("none");
        };
        switch (child) {
            case work:
                if (cart.section[0].isOpen) {
                    sectionOpen();
                }
                else sectionClose();
                cart.section[0].isOpen = !cart.section[0].isOpen;
                break
            case education:
                if (cart.section[1].isOpen) {
                    sectionOpen();
                }
                else sectionClose();
                cart.section[1].isOpen = !cart.section[1].isOpen;
                break
            case skills:
                if (cart.section[2].isOpen) {
                    sectionOpen();
                }
                else sectionClose();
                cart.section[2].isOpen = !cart.section[2].isOpen;
                break
            case tools:
                if (cart.section[3].isOpen) {
                    sectionOpen();
                }
                else sectionClose();
                cart.section[3].isOpen = !cart.section[3].isOpen;
                break
        }
    })

document.getElementById('sendButton').addEventListener('click', function () {
    function getAppealBySex() {
        return cart.resume[0].sex == "male" ? "Уважаемый" : "Уважаемая";
    };

    document.querySelector(".send a").href = "mailto:" + cart.resume[0].email + "?subject=" +
        cart.record[0].subTitle
        + "&body=" + getAppealBySex() + ' ' + cart.resume[0].fullName + ', ' + cart.record[0].to +
        ' ' + cart.record[0].from + "." + "%0A" + "%0A" + new Date().toLocaleDateString()
});