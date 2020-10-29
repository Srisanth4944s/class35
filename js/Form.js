class Form{
    constructor(){}
    display(){
        var title =  createElement('h2')
        title.html("CAR RACING")
        title.position(530,0)

        var input = createInput("")
        input.position(530,260)

        var button = createButton('play')
        button.position(550,300)


        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name = input.value()


            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)

            var greeting = createElement('h3')

            greeting.html("WELCOME "+name)
            greeting.position(530,160)
        })
    }


}