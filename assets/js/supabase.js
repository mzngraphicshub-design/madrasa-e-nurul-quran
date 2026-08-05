/* =====================================================
MNQ ERP v2.0
SUPABASE CONFIG
===================================================== */

// ===============================
// SUPABASE URL
// ===============================

const SUPABASE_URL =
"https://uiesccugmneumxokexuf.supabase.co";

// ===============================
// SUPABASE ANON KEY
// ===============================

const SUPABASE_ANON_KEY =
"sb_publishable_GtNASBYP5Nvp7wYmrTi7Zg_wdj_peW3...";

// ===============================
// CONNECT
// ===============================

const db = supabase.createClient(

SUPABASE_URL,

SUPABASE_ANON_KEY

);

// ===============================
// STORAGE
// ===============================

const STUDENT_BUCKET="students";

const TEACHER_BUCKET="teachers";

const EMPLOYEE_BUCKET="employees";

const NOTICE_BUCKET="notices";

const GALLERY_BUCKET="gallery";

// ===============================
// CHECK CONNECTION
// ===============================

async function checkConnection(){

try{

const {error}=await db

.from("students")

.select("id")

.limit(1);

if(error) throw error;

console.log("✅ Supabase Connected");

}catch(err){

console.error("❌ Supabase Error");

console.error(err.message);

}

}

checkConnection();

/* =====================================================
UPLOAD IMAGE
===================================================== */

async function uploadImage(file,bucket){

if(!file) return "";

const fileName=

Date.now()+"_"+file.name;

const {error}=await db.storage

.from(bucket)

.upload(fileName,file);

if(error) throw error;

const{

data

}=db.storage

.from(bucket)

.getPublicUrl(fileName);

return data.publicUrl;

}

/* =====================================================
DELETE IMAGE
===================================================== */

async function deleteImage(path,bucket){

if(!path) return;

const fileName=

path.split("/").pop();

await db.storage

.from(bucket)

.remove([fileName]);

}

/* =====================================================
FORMAT DATE
===================================================== */

function formatDate(date){

return new Date(date)

.toLocaleDateString("bn-BD",{

day:"2-digit",

month:"long",

year:"numeric"

});

}

/* =====================================================
FORMAT MONEY
===================================================== */

function money(amount){

return Number(amount)

.toLocaleString("en-IN");

}

/* =====================================================
GENERATE UNIQUE ID
===================================================== */

function uniqueID(prefix){

const year=

new Date()

.getFullYear();

const time=

Date.now()

.toString()

.slice(-6);

return `${prefix}${year}${time}`;

}

/* =====================================================
SUCCESS MESSAGE
===================================================== */

function success(msg){

Swal.fire({

icon:"success",

title:"Success",

text:msg,

timer:1800,

showConfirmButton:false

});

}

/* =====================================================
ERROR MESSAGE
===================================================== */

function failed(msg){

Swal.fire({

icon:"error",

title:"Error",

text:msg

});

}

/* =====================================================
LOADING
===================================================== */

function loading(){

Swal.fire({

title:"Loading...",

allowOutsideClick:false,

didOpen(){

Swal.showLoading();

}

});

}

function closeLoading(){

Swal.close();

}
