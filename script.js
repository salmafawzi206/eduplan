// 1. الإمساك بعناصر الصفحة (النموذج، حقول الإدخال، والقائمة)
const form = document.querySelector('form');
const taskInput = document.querySelector('input[type="text"]');
const subjectSelect = document.querySelector('select');
const taskList = document.querySelector('ul');

// 2. الاستماع لحدث إرسال النموذج (عند الضغط على زر إضافة)
form.addEventListener('submit', function(event) {
    // منع السلوك الافتراضي للفورم (منع إعادة تحميل الصفحة)
    event.preventDefault(); 

    // جلب القيم التي أدخلها المستخدم وتنظيف الفراغات
    const taskText = taskInput.value.trim();
    const selectedSubject = subjectSelect.value;

    // 3. التحقق من المدخلات (تأكيد كتابة الواجب واختيار المادة)
    if (taskText === '') {
        alert('الرجاء كتابة اسم الواجب أولاً!');
        return;
    }
    
    if (subjectSelect.selectedIndex === 0 || selectedSubject === '') {
        alert('الرجاء اختيار المادة الدراسية!');
        return;
    }

    // 4. إنشاء عنصر قائمة جديد برمجيّاً
    const newLi = document.createElement('li');
    
    // تنسيق النص الذي سيظهر داخل القائمة (اسم الواجب - المادة)
    newLi.textContent = taskText + " - (مادة: " + selectedSubject + ")";

    // 5. إضافة العنصر الجديد إلى قائمة المهام 
    taskList.appendChild(newLi);

    // 6. تفريغ الحقول ليكون جاهزاً للواجب التالي
    form.reset();
});