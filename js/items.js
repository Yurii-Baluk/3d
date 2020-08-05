// add items to the "Add Items" tab

$(document).ready(function() {
  /*
  var items = [
   {
      "name" : "Closed Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "type" : "7"
    },
    {
      "name" : "Closed Custom Door",
      "image" : "models/thumbnails/thumbnail_Closed_Door_preview.jpg",
      "model" : "models/js/Closed_Door.json",
      "type" : "7"
    },
    {
      "name" : "Open Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "type" : "7"
    },
    {
      "name" : "Window",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "type" : "3"
    },
    {
      "name" : "Chair",
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "type" : "1"
    },
    {
      "name" : "Red Chair",
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "type" : "1"
    },
    {
      "name" : "Blue Chair",
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - Dark Wood",
      "image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - White",
      "image" : "models/thumbnails/thumbnail_img25o.jpg",
      "model" : "models/js/we-narrow6white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - Shale",
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - White",
      "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "models/js/cb-archnight-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Wardrobe - White",
      "image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "models/js/ik-kivine_baked.js",
      "type" : "1"
    },
    {
      "name" : "Full Bed",
      "image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "models/js/ik_nordli_full.js",
      "type" : "1"
    },
    {
      "name" : "Bookshelf",
      "image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - White",
      "image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "models/js/cb-clapboard_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - Black",
      "image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "models/js/cb-moore_baked.js",
      "type" : "1"
    },
       {
      "name" : "Sectional - Olive",
      "image" : "models/thumbnails/thumbnail_img21o.jpg",
      "model" : "models/js/we-crosby2piece-greenbaked.js",
      "type" : "1"
    },
    {
      "name" : "Sofa - Grey",
      "image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "models/js/cb-rochelle-gray_baked.js",
      "type" : "1"
    },
        {
      "name" : "Wooden Trunk",
      "image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "models/js/cb-tecs_baked.js",
      "type" : "1"
    },
        {
      "name" : "Floor Lamp",
      "image" : "models/thumbnails/thumbnail_ore-white.png",
      "model" : "models/js/ore-3legged-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Coffee Table - Wood",
      "image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "models/js/ik-stockholmcoffee-brown.js",
      "type" : "1"
    },
    {
      "name" : "Side Table",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "models/js/GUSossingtonendtable.js",
      "type" : "1"
    },



      {
          "name" : "Volt",
          "image" : "models/thumbnails/thumbnail_volt.jpg",
          "model" : "models/js/cb-volt.js",
          "type" : "1"
      },
      {
      "name" : "Dining table",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "models/js/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1"
    },
      {
      "name" : "Blue Rug",
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "type" : "8"
    },
    {
      "name" : "NYC Poster",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "type" : "2"
    }

  ]
*/
    var items = [{"name": "Simplecabinet", "image": "models/thumbnails_new/SimpleCabinet.png", "model": "models/gltf/SimpleCabinet.glb", "type": "9", "format": "gltf"}, {"name": "Bathroomcabinet", "image": "models/thumbnails_new/bathroomCabinet.png", "model": "models/gltf/bathroomCabinet.glb", "type": "2", "format": "gltf"}, {"name": "Bathroomcabinetdrawer", "image": "models/thumbnails_new/bathroomCabinetDrawer.png", "model": "models/gltf/bathroomCabinetDrawer.glb", "type": "9", "format": "gltf"}, {"name": "Bathroommirror", "image": "models/thumbnails_new/bathroomMirror.png", "model": "models/gltf/bathroomMirror.glb", "type": "2", "format": "gltf"}, {"name": "Bathroomsink", "image": "models/thumbnails_new/bathroomSink.png", "model": "models/gltf/bathroomSink.glb", "type": "9", "format": "gltf"}, {"name": "Bathroomsinksquare", "image": "models/thumbnails_new/bathroomSinkSquare.png", "model": "models/gltf/bathroomSinkSquare.glb", "type": "9", "format": "gltf"}, {"name": "Bathtub", "image": "models/thumbnails_new/bathtub.png", "model": "models/gltf/bathtub.glb", "type": "1", "format": "gltf"}, {"name": "Bear", "image": "models/thumbnails_new/bear.png", "model": "models/gltf/bear.glb", "type": "2", "format": "gltf"}, {"name": "Bedbunk", "image": "models/thumbnails_new/bedBunk.png", "model": "models/gltf/bedBunk.glb", "type": "1", "format": "gltf"}, {"name": "Beddouble", "image": "models/thumbnails_new/bedDouble.png", "model": "models/gltf/bedDouble.glb", "type": "1", "format": "gltf"}, {"name": "Bedsingle", "image": "models/thumbnails_new/bedSingle.png", "model": "models/gltf/bedSingle.glb", "type": "1", "format": "gltf"}, {"name": "Bench", "image": "models/thumbnails_new/bench.png", "model": "models/gltf/bench.glb", "type": "1", "format": "gltf"}, {"name": "Benchcushion", "image": "models/thumbnails_new/benchCushion.png", "model": "models/gltf/benchCushion.glb", "type": "1", "format": "gltf"}, {"name": "Benchcushionlow", "image": "models/thumbnails_new/benchCushionLow.png", "model": "models/gltf/benchCushionLow.glb", "type": "1", "format": "gltf"}, {"name": "Bookcaseclosed", "image": "models/thumbnails_new/bookcaseClosed.png", "model": "models/gltf/bookcaseClosed.glb", "type": "9", "format": "gltf"}, {"name": "Bookcasecloseddoors", "image": "models/thumbnails_new/bookcaseClosedDoors.png", "model": "models/gltf/bookcaseClosedDoors.glb", "type": "9", "format": "gltf"}, {"name": "Bookcaseclosedwide", "image": "models/thumbnails_new/bookcaseClosedWide.png", "model": "models/gltf/bookcaseClosedWide.glb", "type": "9", "format": "gltf"}, {"name": "Bookcaseopen", "image": "models/thumbnails_new/bookcaseOpen.png", "model": "models/gltf/bookcaseOpen.glb", "type": "1", "format": "gltf"}, {"name": "Bookcaseopenlow", "image": "models/thumbnails_new/bookcaseOpenLow.png", "model": "models/gltf/bookcaseOpenLow.glb", "type": "1", "format": "gltf"}, {"name": "Books", "image": "models/thumbnails_new/books.png", "model": "models/gltf/books.glb", "type": "0", "format": "gltf"}, {"name": "Cabinetbed", "image": "models/thumbnails_new/cabinetBed.png", "model": "models/gltf/cabinetBed.glb", "type": "1", "format": "gltf"}, {"name": "Cabinetbeddrawer", "image": "models/thumbnails_new/cabinetBedDrawer.png", "model": "models/gltf/cabinetBedDrawer.glb", "type": "1", "format": "gltf"}, {"name": "Cabinetbeddrawertable", "image": "models/thumbnails_new/cabinetBedDrawerTable.png", "model": "models/gltf/cabinetBedDrawerTable.glb", "type": "1", "format": "gltf"}, {"name": "Cabinettelevision", "image": "models/thumbnails_new/cabinetTelevision.png", "model": "models/gltf/cabinetTelevision.glb", "type": "1", "format": "gltf"}, {"name": "Cabinettelevisiondoors", "image": "models/thumbnails_new/cabinetTelevisionDoors.png", "model": "models/gltf/cabinetTelevisionDoors.glb", "type": "1", "format": "gltf"}, {"name": "Cardboardboxclosed", "image": "models/thumbnails_new/cardboardBoxClosed.png", "model": "models/gltf/cardboardBoxClosed.glb", "type": "0", "format": "gltf"}, {"name": "Cardboardboxopen", "image": "models/thumbnails_new/cardboardBoxOpen.png", "model": "models/gltf/cardboardBoxOpen.glb", "type": "0", "format": "gltf"}, {"name": "Ceilingfan", "image": "models/thumbnails_new/ceilingFan.png", "model": "models/gltf/ceilingFan.gltf", "type": "4", "format": "gltf"}, {"name": "Chair", "image": "models/thumbnails_new/chair.png", "model": "models/gltf/chair.glb", "type": "1", "format": "gltf"}, {"name": "Chaircushion", "image": "models/thumbnails_new/chairCushion.png", "model": "models/gltf/chairCushion.glb", "type": "1", "format": "gltf"}, {"name": "Chairdesk", "image": "models/thumbnails_new/chairDesk.png", "model": "models/gltf/chairDesk.glb", "type": "1", "format": "gltf"}, {"name": "Chairmoderncushion", "image": "models/thumbnails_new/chairModernCushion.png", "model": "models/gltf/chairModernCushion.glb", "type": "1", "format": "gltf"}, {"name": "Chairmodernframecushion", "image": "models/thumbnails_new/chairModernFrameCushion.png", "model": "models/gltf/chairModernFrameCushion.glb", "type": "1", "format": "gltf"}, {"name": "Chairrounded", "image": "models/thumbnails_new/chairRounded.png", "model": "models/gltf/chairRounded.glb", "type": "1", "format": "gltf"}, {"name": "Chandelier", "image": "models/thumbnails_new/nopreview.png", "model": "models/gltf/chandelier.gltf", "type": "4", "format": "gltf"}, {"name": "Coatrack", "image": "models/thumbnails_new/coatRack.png", "model": "models/gltf/coatRack.glb", "type": "2", "format": "gltf"}, {"name": "Coatrackstanding", "image": "models/thumbnails_new/coatRackStanding.png", "model": "models/gltf/coatRackStanding.glb", "type": "1", "format": "gltf"}, {"name": "Computerkeyboard", "image": "models/thumbnails_new/computerKeyboard.png", "model": "models/gltf/computerKeyboard.glb", "type": "0", "format": "gltf"}, {"name": "Computermouse", "image": "models/thumbnails_new/computerMouse.png", "model": "models/gltf/computerMouse.glb", "type": "0", "format": "gltf"}, {"name": "Computerscreen", "image": "models/thumbnails_new/computerScreen.png", "model": "models/gltf/computerScreen.glb", "type": "2", "format": "gltf"}, {"name": "Desk", "image": "models/thumbnails_new/desk.png", "model": "models/gltf/desk.glb", "type": "1", "format": "gltf"}, {"name": "Deskcorner", "image": "models/thumbnails_new/deskCorner.png", "model": "models/gltf/deskCorner.glb", "type": "2", "format": "gltf"}, {"name": "Doorway", "image": "models/thumbnails_new/doorway.png", "model": "models/gltf/doorway.glb", "type": "3", "format": "gltf"}, {"name": "Doorwayfront", "image": "models/thumbnails_new/doorwayFront.png", "model": "models/gltf/doorwayFront.glb", "type": "3", "format": "gltf"}, {"name": "Doorwayopen", "image": "models/thumbnails_new/doorwayOpen.png", "model": "models/gltf/doorwayOpen.glb", "type": "3", "format": "gltf"}, {"name": "Dryer", "image": "models/thumbnails_new/dryer.png", "model": "models/gltf/dryer.glb", "type": "2", "format": "gltf"}, {"name": "Floorcorner", "image": "models/thumbnails_new/floorCorner.png", "model": "models/gltf/floorCorner.glb", "type": "0", "format": "gltf"}, {"name": "Floorcornerround", "image": "models/thumbnails_new/floorCornerRound.png", "model": "models/gltf/floorCornerRound.glb", "type": "0", "format": "gltf"}, {"name": "Floorfull", "image": "models/thumbnails_new/floorFull.png", "model": "models/gltf/floorFull.glb", "type": "0", "format": "gltf"}, {"name": "Floorhalf", "image": "models/thumbnails_new/floorHalf.png", "model": "models/gltf/floorHalf.glb", "type": "0", "format": "gltf"}, {"name": "Hoodlarge", "image": "models/thumbnails_new/hoodLarge.png", "model": "models/gltf/hoodLarge.glb", "type": "0", "format": "gltf"}, {"name": "Hoodmodern", "image": "models/thumbnails_new/hoodModern.png", "model": "models/gltf/hoodModern.glb", "type": "0", "format": "gltf"}, {"name": "Kitchenbar", "image": "models/thumbnails_new/kitchenBar.png", "model": "models/gltf/kitchenBar.glb", "type": "9", "format": "gltf"}, {"name": "Kitchenbarend", "image": "models/thumbnails_new/kitchenBarEnd.png", "model": "models/gltf/kitchenBarEnd.glb", "type": "9", "format": "gltf"}, {"name": "Kitchenblender", "image": "models/thumbnails_new/kitchenBlender.png", "model": "models/gltf/kitchenBlender.glb", "type": "0", "format": "gltf"}, {"name": "Kitchencabinet", "image": "models/thumbnails_new/kitchenCabinet.png", "model": "models/gltf/kitchenCabinet.glb", "type": "9", "format": "gltf"}, {"name": "Kitchencabinetcornerinner", "image": "models/thumbnails_new/kitchenCabinetCornerInner.png", "model": "models/gltf/kitchenCabinetCornerInner.glb", "type": "9", "format": "gltf"}, {"name": "Kitchencabinetcornerround", "image": "models/thumbnails_new/kitchenCabinetCornerRound.png", "model": "models/gltf/kitchenCabinetCornerRound.glb", "type": "9", "format": "gltf"}, {"name": "Kitchencabinetdrawer", "image": "models/thumbnails_new/kitchenCabinetDrawer.png", "model": "models/gltf/kitchenCabinetDrawer.glb", "type": "2", "format": "gltf"}, {"name": "Kitchencabinetupper", "image": "models/thumbnails_new/kitchenCabinetUpper.png", "model": "models/gltf/kitchenCabinetUpper.glb", "type": "2", "format": "gltf"}, {"name": "Kitchencabinetuppercorner", "image": "models/thumbnails_new/kitchenCabinetUpperCorner.png", "model": "models/gltf/kitchenCabinetUpperCorner.glb", "type": "2", "format": "gltf"}, {"name": "Kitchencabinetupperdouble", "image": "models/thumbnails_new/kitchenCabinetUpperDouble.png", "model": "models/gltf/kitchenCabinetUpperDouble.glb", "type": "2", "format": "gltf"}, {"name": "Kitchencabinetupperlow", "image": "models/thumbnails_new/kitchenCabinetUpperLow.png", "model": "models/gltf/kitchenCabinetUpperLow.glb", "type": "2", "format": "gltf"}, {"name": "Kitchencoffeemachine", "image": "models/thumbnails_new/kitchenCoffeeMachine.png", "model": "models/gltf/kitchenCoffeeMachine.glb", "type": "0", "format": "gltf"}, {"name": "Kitchenfridge", "image": "models/thumbnails_new/kitchenFridge.png", "model": "models/gltf/kitchenFridge.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenfridgebuiltin", "image": "models/thumbnails_new/kitchenFridgeBuiltIn.png", "model": "models/gltf/kitchenFridgeBuiltIn.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenfridgelarge", "image": "models/thumbnails_new/kitchenFridgeLarge.png", "model": "models/gltf/kitchenFridgeLarge.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenfridgesmall", "image": "models/thumbnails_new/kitchenFridgeSmall.png", "model": "models/gltf/kitchenFridgeSmall.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenmicrowave", "image": "models/thumbnails_new/kitchenMicrowave.png", "model": "models/gltf/kitchenMicrowave.glb", "type": "0", "format": "gltf"}, {"name": "Kitchensink", "image": "models/thumbnails_new/kitchenSink.png", "model": "models/gltf/kitchenSink.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenstove", "image": "models/thumbnails_new/kitchenStove.png", "model": "models/gltf/kitchenStove.glb", "type": "1", "format": "gltf"}, {"name": "Kitchenstoveelectric", "image": "models/thumbnails_new/kitchenStoveElectric.png", "model": "models/gltf/kitchenStoveElectric.glb", "type": "1", "format": "gltf"}, {"name": "Lamproundfloor", "image": "models/thumbnails_new/lampRoundFloor.png", "model": "models/gltf/lampRoundFloor.glb", "type": "1", "format": "gltf"}, {"name": "Lamproundtable", "image": "models/thumbnails_new/lampRoundTable.png", "model": "models/gltf/lampRoundTable.glb", "type": "0", "format": "gltf"}, {"name": "Lampsquareceiling", "image": "models/thumbnails_new/lampSquareCeiling.png", "model": "models/gltf/lampSquareCeiling.glb", "type": "4", "format": "gltf"}, {"name": "Lampsquarefloor", "image": "models/thumbnails_new/lampSquareFloor.png", "model": "models/gltf/lampSquareFloor.glb", "type": "1", "format": "gltf"}, {"name": "Lampsquaretable", "image": "models/thumbnails_new/lampSquareTable.png", "model": "models/gltf/lampSquareTable.glb", "type": "0", "format": "gltf"}, {"name": "Lampwall", "image": "models/thumbnails_new/lampWall.png", "model": "models/gltf/lampWall.glb", "type": "2", "format": "gltf"}, {"name": "Laptop", "image": "models/thumbnails_new/laptop.png", "model": "models/gltf/laptop.glb", "type": "0", "format": "gltf"}, {"name": "Loungechair", "image": "models/thumbnails_new/loungeChair.png", "model": "models/gltf/loungeChair.glb", "type": "1", "format": "gltf"}, {"name": "Loungechairrelax", "image": "models/thumbnails_new/loungeChairRelax.png", "model": "models/gltf/loungeChairRelax.glb", "type": "1", "format": "gltf"}, {"name": "Loungedesignchair", "image": "models/thumbnails_new/loungeDesignChair.png", "model": "models/gltf/loungeDesignChair.glb", "type": "1", "format": "gltf"}, {"name": "Loungedesignsofa", "image": "models/thumbnails_new/loungeDesignSofa.png", "model": "models/gltf/loungeDesignSofa.glb", "type": "1", "format": "gltf"}, {"name": "Loungedesignsofacorner", "image": "models/thumbnails_new/loungeDesignSofaCorner.png", "model": "models/gltf/loungeDesignSofaCorner.glb", "type": "9", "format": "gltf"}, {"name": "Loungesofa", "image": "models/thumbnails_new/loungeSofa.png", "model": "models/gltf/loungeSofa.glb", "type": "1", "format": "gltf"}, {"name": "Loungesofacorner", "image": "models/thumbnails_new/loungeSofaCorner.png", "model": "models/gltf/loungeSofaCorner.glb", "type": "9", "format": "gltf"}, {"name": "Loungesofalong", "image": "models/thumbnails_new/loungeSofaLong.png", "model": "models/gltf/loungeSofaLong.glb", "type": "1", "format": "gltf"}, {"name": "Loungesofaottoman", "image": "models/thumbnails_new/loungeSofaOttoman.png", "model": "models/gltf/loungeSofaOttoman.glb", "type": "1", "format": "gltf"}, {"name": "Paneling", "image": "models/thumbnails_new/paneling.png", "model": "models/gltf/paneling.glb", "type": "2", "format": "gltf"}, {"name": "Pillow", "image": "models/thumbnails_new/pillow.png", "model": "models/gltf/pillow.glb", "type": "0", "format": "gltf"}, {"name": "Pillowblue", "image": "models/thumbnails_new/pillowBlue.png", "model": "models/gltf/pillowBlue.glb", "type": "0", "format": "gltf"}, {"name": "Pillowbluelong", "image": "models/thumbnails_new/pillowBlueLong.png", "model": "models/gltf/pillowBlueLong.glb", "type": "0", "format": "gltf"}, {"name": "Pillowlong", "image": "models/thumbnails_new/pillowLong.png", "model": "models/gltf/pillowLong.glb", "type": "0", "format": "gltf"}, {"name": "Plantsmall1", "image": "models/thumbnails_new/plantSmall1.png", "model": "models/gltf/plantSmall1.glb", "type": "1", "format": "gltf"}, {"name": "Plantsmall2", "image": "models/thumbnails_new/plantSmall2.png", "model": "models/gltf/plantSmall2.glb", "type": "1", "format": "gltf"}, {"name": "Plantsmall3", "image": "models/thumbnails_new/plantSmall3.png", "model": "models/gltf/plantSmall3.glb", "type": "1", "format": "gltf"}, {"name": "Pottedplant", "image": "models/thumbnails_new/pottedPlant.png", "model": "models/gltf/pottedPlant.glb", "type": "1", "format": "gltf"}, {"name": "Radio", "image": "models/thumbnails_new/radio.png", "model": "models/gltf/radio.glb", "type": "0", "format": "gltf"}, {"name": "Rugdoormat", "image": "models/thumbnails_new/rugDoormat.png", "model": "models/gltf/rugDoormat.glb", "type": "1", "format": "gltf"}, {"name": "Rugrectangle", "image": "models/thumbnails_new/rugRectangle.png", "model": "models/gltf/rugRectangle.glb", "type": "1", "format": "gltf"}, {"name": "Ruground", "image": "models/thumbnails_new/rugRound.png", "model": "models/gltf/rugRound.glb", "type": "1", "format": "gltf"}, {"name": "Rugrounded", "image": "models/thumbnails_new/rugRounded.png", "model": "models/gltf/rugRounded.glb", "type": "1", "format": "gltf"}, {"name": "Rugsquare", "image": "models/thumbnails_new/rugSquare.png", "model": "models/gltf/rugSquare.glb", "type": "1", "format": "gltf"}, {"name": "Shower", "image": "models/thumbnails_new/shower.png", "model": "models/gltf/shower.glb", "type": "9", "format": "gltf"}, {"name": "Showerround", "image": "models/thumbnails_new/showerRound.png", "model": "models/gltf/showerRound.glb", "type": "9", "format": "gltf"}, {"name": "Sidetable", "image": "models/thumbnails_new/sideTable.png", "model": "models/gltf/sideTable.glb", "type": "1", "format": "gltf"}, {"name": "Sidetabledrawers", "image": "models/thumbnails_new/sideTableDrawers.png", "model": "models/gltf/sideTableDrawers.glb", "type": "1", "format": "gltf"}, {"name": "Speaker", "image": "models/thumbnails_new/speaker.png", "model": "models/gltf/speaker.glb", "type": "1", "format": "gltf"}, {"name": "Speakersmall", "image": "models/thumbnails_new/speakerSmall.png", "model": "models/gltf/speakerSmall.glb", "type": "1", "format": "gltf"}, {"name": "Stairs", "image": "models/thumbnails_new/stairs.png", "model": "models/gltf/stairs.glb", "type": "1", "format": "gltf"}, {"name": "Stairscorner", "image": "models/thumbnails_new/stairsCorner.png", "model": "models/gltf/stairsCorner.glb", "type": "1", "format": "gltf"}, {"name": "Stairsopen", "image": "models/thumbnails_new/stairsOpen.png", "model": "models/gltf/stairsOpen.glb", "type": "1", "format": "gltf"}, {"name": "Stairsopensingle", "image": "models/thumbnails_new/stairsOpenSingle.png", "model": "models/gltf/stairsOpenSingle.glb", "type": "1", "format": "gltf"}, {"name": "Stoolbar", "image": "models/thumbnails_new/stoolBar.png", "model": "models/gltf/stoolBar.glb", "type": "1", "format": "gltf"}, {"name": "Stoolbarsquare", "image": "models/thumbnails_new/stoolBarSquare.png", "model": "models/gltf/stoolBarSquare.glb", "type": "1", "format": "gltf"}, {"name": "Table", "image": "models/thumbnails_new/table.png", "model": "models/gltf/table.glb", "type": "1", "format": "gltf"}, {"name": "Tablecloth", "image": "models/thumbnails_new/tableCloth.png", "model": "models/gltf/tableCloth.glb", "type": "1", "format": "gltf"}, {"name": "Tablecoffee", "image": "models/thumbnails_new/tableCoffee.png", "model": "models/gltf/tableCoffee.glb", "type": "1", "format": "gltf"}, {"name": "Tablecoffeeglass", "image": "models/thumbnails_new/tableCoffeeGlass.png", "model": "models/gltf/tableCoffeeGlass.glb", "type": "1", "format": "gltf"}, {"name": "Tablecoffeeglasssquare", "image": "models/thumbnails_new/tableCoffeeGlassSquare.png", "model": "models/gltf/tableCoffeeGlassSquare.glb", "type": "1", "format": "gltf"}, {"name": "Tablecoffeesquare", "image": "models/thumbnails_new/tableCoffeeSquare.png", "model": "models/gltf/tableCoffeeSquare.glb", "type": "1", "format": "gltf"}, {"name": "Tablecross", "image": "models/thumbnails_new/tableCross.png", "model": "models/gltf/tableCross.glb", "type": "1", "format": "gltf"}, {"name": "Tablecrosscloth", "image": "models/thumbnails_new/tableCrossCloth.png", "model": "models/gltf/tableCrossCloth.glb", "type": "1", "format": "gltf"}, {"name": "Tableglass", "image": "models/thumbnails_new/tableGlass.png", "model": "models/gltf/tableGlass.glb", "type": "1", "format": "gltf"}, {"name": "Tableround", "image": "models/thumbnails_new/tableRound.png", "model": "models/gltf/tableRound.glb", "type": "1", "format": "gltf"}, {"name": "Televisionantenna", "image": "models/thumbnails_new/televisionAntenna.png", "model": "models/gltf/televisionAntenna.glb", "type": "2", "format": "gltf"}, {"name": "Televisionmodern", "image": "models/thumbnails_new/televisionModern.png", "model": "models/gltf/televisionModern.glb", "type": "2", "format": "gltf"}, {"name": "Televisionvintage", "image": "models/thumbnails_new/televisionVintage.png", "model": "models/gltf/televisionVintage.glb", "type": "2", "format": "gltf"}, {"name": "Toaster", "image": "models/thumbnails_new/toaster.png", "model": "models/gltf/toaster.glb", "type": "0", "format": "gltf"}, {"name": "Toilet", "image": "models/thumbnails_new/toilet.png", "model": "models/gltf/toilet.glb", "type": "1", "format": "gltf"}, {"name": "Toiletsquare", "image": "models/thumbnails_new/toiletSquare.png", "model": "models/gltf/toiletSquare.glb", "type": "1", "format": "gltf"}, {"name": "Trashcan", "image": "models/thumbnails_new/trashcan.png", "model": "models/gltf/trashcan.glb", "type": "1", "format": "gltf"}, {"name": "Wall", "image": "models/thumbnails_new/wall.png", "model": "models/gltf/wall.glb", "type": "0", "format": "gltf"}, {"name": "Wallcorner", "image": "models/thumbnails_new/wallCorner.png", "model": "models/gltf/wallCorner.glb", "type": "0", "format": "gltf"}, {"name": "Wallcornerrond", "image": "models/thumbnails_new/wallCornerRond.png", "model": "models/gltf/wallCornerRond.glb", "type": "0", "format": "gltf"}, {"name": "Walldoorway", "image": "models/thumbnails_new/wallDoorway.png", "model": "models/gltf/wallDoorway.glb", "type": "3", "format": "gltf"}, {"name": "Walldoorwaywide", "image": "models/thumbnails_new/wallDoorwayWide.png", "model": "models/gltf/wallDoorwayWide.glb", "type": "3", "format": "gltf"}, {"name": "Wallhalf", "image": "models/thumbnails_new/wallHalf.png", "model": "models/gltf/wallHalf.glb", "type": "0", "format": "gltf"}, {"name": "Wallwindow", "image": "models/thumbnails_new/wallWindow.png", "model": "models/gltf/wallWindow.glb", "type": "3", "format": "gltf"}, {"name": "Wallwindowslide", "image": "models/thumbnails_new/wallWindowSlide.png", "model": "models/gltf/wallWindowSlide.glb", "type": "3", "format": "gltf"}, {"name": "Washer", "image": "models/thumbnails_new/washer.png", "model": "models/gltf/washer.glb", "type": "1", "format": "gltf"}, {"name": "Washerdryerstacked", "image": "models/thumbnails_new/washerDryerStacked.png", "model": "models/gltf/washerDryerStacked.glb", "type": "1", "format": "gltf"}]
  //  var modelTypesNum = ["0", "1", "2", "3", "4", "7", "8", "9"];


  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                item.name +
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type +
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }
});