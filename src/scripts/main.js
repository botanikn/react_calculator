function operations() {
    let select_option = document.getElementById("selector").value;
    let second_meaning = document.getElementById("second_meaning");
    let op = document.getElementById("op");

    if (select_option == "op1") {
        second_meaning.style.visibility = "visible";
        op.textContent = "?";
    }
    if (select_option == "op2") {
        second_meaning.style.visibility = "visible";
        op.textContent = "+";
    }
    if (select_option == "op3") {
        second_meaning.style.visibility = "visible";
        op.textContent = "X";
    }
    if (select_option == "op4") {
        second_meaning.style.visibility = "visible";
        op.textContent = "/";
    }
    if (select_option == "op5") {
        second_meaning.style.visibility = "visible";
        op.textContent = "-";
    }
    if (select_option == "op6") {
        second_meaning.style.visibility = "visible";
        op.textContent = "++";  
    }
    if (select_option == "op7") {
        second_meaning.style.visibility = "visible";
        op.textContent = "+++";
    }
    if (select_option == "op8") {
        second_meaning.style.visibility = "hidden";
        op.textContent = "!=";
    } 
}

function calculations() {
    let op = document.getElementById('op').innerHTML;
    let first_meaning = document.getElementById('first_meaning').value;
    let second_meaning = document.getElementById('second_meaning').value;
    let answer;
    let result_place = document.getElementById('result_place');

    if (op == '+') {
        let func = validation(first_meaning, second_meaning, true, false, 'числовой', 'строка', 'reg');

        if (func == true) {
            answer = Number(first_meaning) + Number(second_meaning);
            result_place.textContent = `${answer}`;
        }
    }
    else if (op == 'X') {
        let func = validation(first_meaning, second_meaning, true, false, 'числовой', 'строка', 'reg');

        if (func == true) {
            answer = Number(first_meaning) * Number(second_meaning);
            result_place.textContent = `${answer}`;
        }
    }
    else if (op == '/') {
        let func = validation(first_meaning, second_meaning, true, false, 'числовой', 'строка', 'reg');

        if (func == true) {
            answer = Number(first_meaning) / Number(second_meaning);
            result_place.textContent = `${answer}`;
        }
    }
    else if (op == '-') {
        let func = validation(first_meaning, second_meaning, true, false, 'числовой', 'строка', 'reg');

        if (func == true) {
            answer = Number(first_meaning) - Number(second_meaning);
            result_place.textContent = `${answer}`;
        }
    }
    else if (op == '++') {
        let func = validation(first_meaning, second_meaning, false, true, 'строка', 'числовой', 'reg');

        if (func == true) {
            answer = first_meaning + second_meaning;
            result_place.textContent = `${answer}`;
        }
    }
    else if (op == '+++') {
        let func = validation(first_meaning, second_meaning, false, true, 'строка', 'числовой', 'mas');

        if (func == true) {
            const first_array = first_meaning.split(',');
            const second_array = second_meaning.split(',');
            let answer_array = [];
            let new_start = 0;

            if (first_array.length > second_array.length) {
                for (let i = 0; i < second_array.length; i++) {
                    answer_array.push(Number(first_array[i]) + Number(second_array[i]));
                    new_start++;
                }
                for (let i = new_start; i < first_array.length; i++) {
                    answer_array.push(Number(first_array[i]));
                }
            }
            else if (first_array.length < second_array.length) {
                for (let i = 0; i < first_array.length; i++) {
                    answer_array.push(Number(first_array[i]) + Number(second_array[i]));
                    new_start++;
                }
                for (let i = new_start; i < second_array.length; i++) {
                    answer_array.push(Number(second_array[i]));
                }
            }
            else {
                for (let i = 0; i < first_array.length; i++) {
                    answer_array.push(Number(first_array[i]) + Number(second_array[i]));
                }
            }

            result_place.textContent = `${answer_array}`;
        }
    }
    else if (op == '!=') {
        validation(first_meaning, second_meaning, false, true, 'строка', 'числовой', 'logic');
    }
}

function validation(value_1, value_2, number, string, needed, forbidden, type) {
    let error_one = document.getElementById('error_one');
    let error_two = document.getElementById('error_two');

    if (type == 'reg') {
        if (isNaN(value_1) == string && isNaN(value_2) == string) {
            error_one.textContent = '';
            error_two.textContent = '';
            return true;
        }
        else if (isNaN(value_1) == number && isNaN(value_2) == string) {
            error_two.textContent = '';
            error_one.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        } 
        else if (isNaN(value_1) == string && isNaN(value_2) == number) {
            error_one.textContent = '';
            error_two.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        }
        else if (isNaN(value_1) == number && isNaN(value_2) == number) {
            error_one.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            error_two.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        }
    }
    else if (type == 'mas') {
        const array_one = value_1.split(',');
        const array_two = value_2.split(',');
        let ind_one = 0;
        let ind_two = 0;

        array_one.map((value) => {
            if (isNaN(value) == number) {
                ind_one++;
            }
        })
        array_two.map((value) => {
            if (isNaN(value) == number) {
                ind_two++;
            }
        })

        if (ind_one == array_one.length && ind_two == array_two.length) {
            error_one.textContent = '';
            error_two.textContent = '';
            return true;
        }
        else if (ind_one != array_one.length && ind_two == array_two.length) {
            error_two.textContent = '';
            error_one.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        } 
        else if (ind_one == array_one.length && ind_two != array_two.length) {
            error_one.textContent = '';
            error_two.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        }
        else if (ind_one != array_one.length && ind_two != array_two.length) {
            error_one.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            error_two.textContent = `Введённый тип данных - ${forbidden}, ожидаемый тип - ${needed}`;
            return false;
        }
    }
    else if (type == 'logic') {
        if (value_1 == 'true') {
            error_one.textContent = '';
        }
        else if (value_1 == 'false') {
            error_one.textContent = '';
        }
        else {
            error_one.textContent = 'Введённое значение не является true или false';
        }
    }
}

export {operations, calculations, validation};