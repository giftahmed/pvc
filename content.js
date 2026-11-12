/* ============================================================
   PVC @10: CONTENT FILE  (the only file you need to edit)
   PHOTOS OF PEOPLE: save as images/people/<name-in-lowercase-with-dashes>.jpg
     e.g. "Min. Sam" -> images/people/min-sam.jpg
   MEMORY PHOTOS: save inside images/memories/ and list them in an album.
     seq("pvc-at-5",4) means pvc-at-5-1.jpg ... pvc-at-5-4.jpg
   Every person needs BOTH a name and a title (role).
   ============================================================ */
window.PVC = (() => {
  const seq = (p, n, e = 'jpg') => Array.from({ length: n }, (_, i) => `${p}-${i + 1}.${e}`);
  return {
    guests: [
      { name: "Pst. Great Samson", role: "2027 Guest Minister" },
      { name: "Min. Sam", role: "2027 Guest Minister" },
      { name: "Mrs. Eunice", role: "2027 Guest Minister" },
      { name: "Min. John", role: "2027 Guest Minister" },
      { name: "Pst. Johnson", role: "2027 Guest Minister" }
    ],

    albums: [
      { title: "Pvcites 2020", files: seq("pvcites-2020", 1) },
      { title: "2020 Annual Worship Session", files: seq("annual-worship-2020", 1) },
      { title: "PVC @5", files: seq("pvc-at-5", 4) },
      { title: "2023 Worship Session", files: seq("worship-2023", 1) },
      { title: "2025 Worship Session", files: seq("worship-2025", 6) },
      { title: "Highlights", files: [["worship-highlight.mp4", "Worship session highlight"]] },
      { title: "Programme Flyers", files: [
        ["flyers-1.jpg", "Moment of Worship ’19: Empowerment"],
        ["flyers-2.jpg", "Worship Retreat 2020"],
        ["flyers-3.jpg", "5th Anniversary Picnic, January 2021"]
      ] },
      { title: "Faces & Moments", files: [
        ["abel-godwin.jpg", "Min. Abel and Apostle Godwin"],
        ["favour-baby-perfect.jpg", "Min. Favour and Baby Perfect"],
        ["janet-julianna.jpg", "Min. Janet and Julianna"],
        ["ministration.jpg", "In ministration"]
      ] }
    ],

    crew: [
      { group: "Leadership", people: [
        { name: "Min. Alabi Abel", role: "Convener, PVC" },
        { name: "Pst. Isaiah Alabi", role: "Grand Patron, PVC" },
        { name: "Mummy Juliana", role: "Matron, PVC" },
        { name: "Pst. Dr. Matthew Ahmed", role: "Patron, PVC" },
        { name: "Min. Courage", role: "MD, PVC" },
        { name: "Min. Micah", role: "General Secretary, PVC" }
      ] },
      { group: "Partners & Advisers", people: [
        { name: "Mr & Mrs Victor", role: "PVC Senior Partner" },
        { name: "Pastor Praise", role: "PVC Senior Partner" },
        { name: "Pst. James Daniel", role: "Senior Partner & Adviser" },
        { name: "Pst. Peter Jeremiah", role: "Senior Partner" },
        { name: "Mr. Gift", role: "PVC Senior Partner & Tech Adviser" },
        { name: "Pst. James Isah", role: "Partner" },
        { name: "Mrs. Becky Titus", role: "Prayer Partner" },
        { name: "Min. Patience", role: "PVC Medical Adviser" },
        { name: "Dr. Victory", role: "Guest Medical Adviser" }
      ] },
      { group: "PVC Team & PVCites", people: [
        { name: "Min. Victoria", role: "Asst. Prayer Secretary, PVC" },
        { name: "Mr. Johnson", role: "Audio & Sound" },
        { name: "Min. Caleb", role: "Power House" },
        // "PVCite" is a provisional title: replace with each person's real title when known
        { name: "Min. Success Ejike", role: "PVCite" },
        { name: "Min. Kareem Destiny", role: "PVCite" },
        { name: "Min. U. Joseph", role: "PVCite" },
        { name: "Min. Joseph", role: "PVCite" },
        { name: "Min. Gloria", role: "PVCite" },
        { name: "Min. Favour", role: "PVCite" },
        { name: "Psalmist Sam", role: "PVCite" },
        { name: "Zeebass", role: "PVCite" },
        { name: "Min. Ben Johnson", role: "PVCite" },
        { name: "Min. Miracle", role: "PVCite" },
        { name: "Min. Priscilla", role: "PVCite" },
        { name: "Min. Zion", role: "PVCite" },
        { name: "Min. Gabriel", role: "PVCite" },
        { name: "Min. Janet Isaac", role: "PVCite" },
        { name: "Min. Samuel", role: "PVCite" },
        { name: "Min. Solo", role: "PVCite" }
      ] }
    ],

    babies: [
      { name: "Min. Jayden", role: "PVC 1st Born" },
      { name: "Min. Perfect", role: "PVC 2nd Born" }
    ],

    logos: [
      { name: "Old logo", src: "images/logos/old-logo.png" },
      { name: "Redesigned logo", src: "images/logos/redesigned-logo.png" }
    ]
  };
})();
