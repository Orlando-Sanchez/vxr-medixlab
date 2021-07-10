    let scene = document.querySelector('a-scene');
    var aAssets = document.querySelector('a-assets');
    // create asset reference and set gltf atributes
    var alcoholGel = document.createElement('a-asset-item');
    alcoholGel.setAttribute("id","alcoholgel")
    alcoholGel.setAttribute("src","AlcoholGel.gltf")
    console.log('alcoholGel:', alcoholGel)
    aAssets.appendChild(alcoholGel);
    console.log('aAssets:', aAssets)

    
    // set template
    var alcoholGelTemplate = document.createElement('template');
    // console.log('alcoholGelTemplate:', alcoholGelTemplate)
    var rootEntity = document.createElement('a-entity');
    // console.log('rootEntity:', rootEntity)
    var bodyEntity = document.createElement('a-entity');
    // console.log('bodyEntity:', bodyEntity)
    
    alcoholGelTemplate.setAttribute("id","vxr-obj-template-alcoholgel");
    
    rootEntity.setAttribute("id","root-alcoholgel");
    bodyEntity.setAttribute('id', 'alcoholgel01');
    // bodyEntity.setAttribute('dynamic-body', '');
    // bodyEntity.setAttribute('draggable', '');
    // bodyEntity.setAttribute('grabbable', '');
    // bodyEntity.setAttribute('toggle-physics', '');
    // bodyEntity.setAttribute('position', '-0.42543 0.40645 -0.00552');
    // bodyEntity.setAttribute('rotation', '0 90 0');
    // bodyEntity.setAttribute('gltf-model', '#alcoholgel')
    console.log('bodyEntity:', bodyEntity);

    rootEntity.append(bodyEntity); //innner
    alcoholGelTemplate.content.appendChild(rootEntity); //medium
    // alcoholGelTemplate.append(rootEntity); //medium
    aAssets.append(alcoholGelTemplate); //root
    let nodeWithModel = alcoholGelTemplate.content.cloneNode(true).querySelector('#alcoholgel01');
    nodeWithModel.setAttribute('position', '-0.42543 0.40645 -0.00552');
    nodeWithModel.setAttribute('gltf-model', '#alcoholgel');
    console.log('node:', nodeWithModel);
    // node.querySelector('#alcoholgel01').setAttribute('position', '-0.42543 0.40645 -0.00552');
    scene.appendChild(nodeWithModel);
    // console.log("template", alcoholGelTemplate)



// var aAssets = document.querySelector('a-assets');

// // create asset reference and set gltf atributes
// var maskn95= document.createElement('a-asset-item');
// maskn95.setAttribute("id","maskn95")
// maskn95.setAttribute("src","../../Models/gltf/maskn95.gltf")
// aAssets.appendChild(maskn95);

// // set template
// var maskTemplate = document.createElement('template');
// var rootEntity = document.createElement('a-entity');
// var bodyEntity = document.createElement('a-entity');

// maskTemplate.setAttribute("id","vxr-obj-template-9")

// rootEntity.setAttribute("id","Root-mask")
// bodyEntity.setAttribute('id', 'maskn9501')
// bodyEntity.setAttribute('dyanmic-body', '')
// bodyEntity.setAttribute("gltf-model","#maskn95")
// bodyEntity.setAttribute('draggable', '')
// bodyEntity.setAttribute('graggable', '')
// bodyEntity.setAttribute('toggle-physics', '')
// bodyEntity.setAttribute('position', '-0.92496 -0.51507 -0.64401')
// bodyEntity.setAttribute('rotation', '0 90 0')

// console.log("Element modified ",bodyEntity)
// rootEntity.append(bodyEntity); //innner
// maskTemplate.append(rootEntity) //medium
// aAssets.append(maskTemplate); //root
// console.log("template",maskTemplate)

// let template9 =document.getElementById("vxr-obj-template-9")
// var clone = document.importNode(template9.content,true);
// document.appendChild(clone);
 
