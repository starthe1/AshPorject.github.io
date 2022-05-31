let girlArr = ["Ashkey", "Marry", "Lily", "Hazel", "Penny", "Grace", "Tina", "Orchid", "Isabella", "Baily"];
let gnArr = ["Ash", "River", "Forest", "Mip", "Ray", "Fex", "Silver", "Kit", "Trip", "Pint"]
let boyArr = ["Max", "Ale", "Nico", "Rin", "Rex", "Inpu", "Nash", "Nate"]

// Girl Gen
document.querySelector('.girlbutton').addEventListener('click', function() {
    document.querySelector('.Gname').innerHTML = girlArr[Math.floor(Math.random()*girlArr.length)]
})

//Gender Netrual Gen
document.querySelector('.GNbutton').addEventListener('click', function() {
    document.querySelector('.GNname').innerHTML = gnArr[Math.floor(Math.random()*gnArr.length)]
})

//Boy Gen
document.querySelector('.Boybutton').addEventListener('click', function() {
    document.querySelector('.Bname').innerHTML = boyArr[Math.floor(Math.random()*boyArr.length)]
})