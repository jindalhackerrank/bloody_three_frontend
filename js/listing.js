listing.view = function() {
    return m(".container1", [
        m("ul.side-nav.fixed#slide-out", [
            m("li", "First Side Link"),
            m("li", "Second sidebar link")
        ]), 
        m("a[href=#][data-activates=slide-out].button-collapse", m("i.mdi-navigation-menu")),
        m(".row", [m(".col.s12.m9.l9.offset-m2.offset-l2", [
            m(".row",m(".col.s12.m4.l4",m(".card.small")))
        ])])
    ]);
}
