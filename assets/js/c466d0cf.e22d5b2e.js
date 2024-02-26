"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,title:"Updating Data"},l="Updating Data",r={unversionedId:"database-interaction/updating-data",id:"database-interaction/updating-data",title:"Updating Data",description:"Updating Data is Almost Easier than Creating Data",source:"@site/docs/database-interaction/updating-data.md",sourceDirName:"database-interaction",slug:"/database-interaction/updating-data",permalink:"/database-interaction/updating-data",draft:!1,editUrl:"https://github.com/MelodicAlbuild/melodicalbuild.github.io/website/docs/database-interaction/updating-data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Updating Data"},sidebar:"tutorialSidebar",previous:{title:"Creating Data",permalink:"/database-interaction/creating-data"},next:{title:"Deleting Data",permalink:"/database-interaction/deleting-data"}},d={},s=[{value:"BsonDocument Updates",id:"bsondocument-updates",level:2},{value:"Applying a Single Update",id:"applying-a-single-update",level:2},{value:"Applying Many Updates",id:"applying-many-updates",level:2},{value:"Full Examples",id:"full-examples",level:2},{value:"Single Update",id:"single-update",level:3},{value:"Multi Update",id:"multi-update",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-data"},"Updating Data"),(0,i.kt)("p",null,"Updating Data is Almost Easier than Creating Data"),(0,i.kt)("h2",{id:"bsondocument-updates"},"BsonDocument Updates"),(0,i.kt)("p",null,"We return to the builders! Updates are done through the same builder ",(0,i.kt)("inlineCode",{parentName:"p"},'Builders<BsonDocument>.Update.Set("field name", value)'),"."),(0,i.kt)("h2",{id:"applying-a-single-update"},"Applying a Single Update"),(0,i.kt)("p",null,"If you are only trying to apply one update, It's very simple, The method ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateDocumentInCollection(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter, UpdateDefinition<BsonDocument> update)")," allows you to update a document that matches that filter with the ",(0,i.kt)("a",{parentName:"p",href:"#bsondocument-updates"},"update data")," you made before."),(0,i.kt)("h2",{id:"applying-many-updates"},"Applying Many Updates"),(0,i.kt)("p",null,"Let's say you want to update multiple fields at once. It's slightly more complicated. I'll put it in a list first."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make a List of UpdateDefinitions"),(0,i.kt)("li",{parentName:"ol"},"Add each individual UpdateDefinition you want to make to the List"),(0,i.kt)("li",{parentName:"ol"},"Using the Update Method, Create an UpdateDefinition that uses the Combine method base")),(0,i.kt)("p",null,"Ok sounds complex right? It's not I promise. Lets start by making that list, Said list should be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"List<UpdateDefinition<BsonDocument>>")," Then let's add a few fields with ",(0,i.kt)("inlineCode",{parentName:"p"},"List<>.Add(UpdateDefinition<BsonDocument>)"),", Finally let's combine them all together with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Builders<BsonDocument>.Update.Combine(List<>)"),". Once you do that you can use that same Update function from applying a single update, just use that final update method instead."),(0,i.kt)("h2",{id:"full-examples"},"Full Examples"),(0,i.kt)("h3",{id:"single-update"},"Single Update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'collection as IMongoCollection<BsonDocument>\nuser as SocketGuildUser\n\nDatabaseController._instance.UpdateDocumentInCollection(collection, Builders<BsonDocument>.Filter.Eq("userId", user.Id), Builders<BsonDocument>.Update.Set("username", "Clown"));\n')),(0,i.kt)("h3",{id:"multi-update"},"Multi Update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'collection as IMongoCollection<BsonDocument>\nuser as SocketGuildUser\n\nList<UpdateDefinition<BsonDocument>> updateList = new List<UpdateDefinition<BsonDocument>>();\nupdateList.Add(Builders<BsonDocument>.Update.Set("username", "Clown"));\nupdateList.Add(Builders<BsonDocument>.Update.Set("discriminator", "1238"));\nDatabaseController._instance.UpdateDocumentInCollection(collection, Builders<BsonDocument>.Filter.Eq("userId", user.Id), Builders<BsonDocument>.Update.Combine(updateList));\n')))}u.isMDXComponent=!0}}]);