/* ============================================================
   PVC @10: CONTENT FILE  (the only file you need to edit)
   PHOTOS OF PEOPLE: save as images/people/<name-in-lowercase-with-dashes>.jpg
     e.g. "Min. Sam" -> images/people/min-sam.jpg
          "Mr & Mrs Victor" -> images/people/mr-mrs-victor.jpg
     (or set  img:"images/people/anything.jpg"  on that person)
   MEMORY PHOTOS: save inside images/memories/ and list them in an album.
     seq("pvc-at-5",6) means pvc-at-5-1.jpg ... pvc-at-5-6.jpg
     Videos work too: seq("highlight",1,"mp4")
   A missing photo never breaks the page: people show their initial,
   and missing memory photos are simply hidden.
   ============================================================ */
window.PVC = (() => {
  const seq = (p, n, e = 'jpg') => Array.from({ length: n }, (_, i) => `${p}-${i + 1}.${e}`);
  return {
    guests: [
      { name: "Min. Sam", role: "2027 Guest Minister" },
      { name: "Mrs. Eunice", role: "2027 Guest Minister" },
      { name: "Min. John", role: "2027 Guest Minister" },
      { name: "Pst. Johnson", role: "2027 Guest Minister" }
    ],

    albums: [
      { title: "Pvcites 2020", files: seq("pvcites-2020", 1) },
      { title: "2020 Annual Worship Session", files: seq("annual-worship-2020", 1) },
      { title: "Freestyle Mode", files: seq("freestyle", 3) },
      { title: "PVC @5", files: seq("pvc-at-5", 4) },
      { title: "2023 Worship Session", files: seq("worship-2023", 1) },
      { title: "2025 Worship Session", files: seq("worship-2025", 6) },
      { title: "Programme Flyers", files: [
        ["flyers-1.jpg", "Moment of Worship ’19: Empowerment"],
        ["flyers-2.jpg", "Worship Retreat 2020"],
        ["flyers-3.jpg", "5th Anniversary Picnic, January 2021"]
      ] },
      { title: "Faces & Moments", files: [
        ["abel-godwin.jpg", "Min. Abel and Apostle Godwin"],
        ["courage-julius.jpg", "Min. Courage and Min. Julius"],
        ["favour-baby-perfect.jpg", "Min. Favour and Baby Perfect"],
        ["janet-julianna.jpg", "Min. Janet and Julianna"],
        ["ministration.jpg", "In ministration"]
      ] }
    ],

    crew: [
      { group: "Leadership", people: [
        // Replace "Convener" and "PVC Patron" with their real names
        { name: "Convener", role: "PVC Convener" },
        { name: "Mummy Juliana", role: "Matron, PVC" },
        { name: "Min. Courage", role: "MD, PVC" },
        { name: "PVC Patron", role: "Patron" },
        { name: "Min. Jayden", role: "PVC 1st Born" },
        { name: "Min. Perfect", role: "PVC 2nd Born" }
      ] },
      { group: "Partners & Advisers", people: [
        { name: "Mr & Mrs Victor", role: "PVC Senior Partners" },
        { name: "Pastor Praise", role: "PVC Senior Partner" },
        { name: "Mr. Gift", role: "Senior Partner & Tech Adviser" },
        { name: "Min. Patience", role: "PVC Medical Adviser" }
      ] },
      { group: "Ministers & Team", people: [
        { name: "Min. Victoria", role: "Asst. Prayer Secretary" },
        { name: "Mr. Johnson", role: "Audio & Sound" },
        { name: "Min. Caleb", role: "Power House" },
        { name: "Min. U. Joseph", role: "" },
        { name: "Min. Joseph", role: "" },
        { name: "Min. Gloria", role: "" },
        { name: "Min. Favour", role: "" },
        { name: "Psalmist Sam", role: "" },
        { name: "Zeebass", role: "" },
        { name: "Min. Ben Johnson", role: "" },
        { name: "Min. Miracle", role: "" },
        { name: "Min. Priscilla", role: "" },
        { name: "Min. Zion", role: "" },
        { name: "Min. Gabriel", role: "" },
        { name: "Min. Janet Isaac", role: "" },
        { name: "Min. Samuel", role: "" },
        { name: "Min. Solo", role: "" }
      ] }
    ],

    logos: [
      { name: "Old logo", src: "images/logos/old-logo.png" },
      { name: "Redesigned logo", src: "images/logos/redesigned-logo.png" }
    ]
  };
})();
