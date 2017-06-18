'use strict';
exports.examPage = function(request, response) {
    response.render('ExamIt', {
        title: 'Exam'
    });
};