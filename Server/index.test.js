
const {sort9_A, sortA_9, CountOfLetters_AlotFirst, CountOfLetters_LowFirst} = require("./calcString");


const TestCaseA_9 = [
    {
        input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit, nunc convallis vestibulum luctus, justo nisi sodales sapien, ac ornare felis odio sed nibh. Praesent augue urna, volutpat ac volutpat quis, maximus ut ligula. Aenean nec semper mi. In sodales sagittis venenatis. Praesent eu lacinia nisi. Praesent mi sem, gravida eget dictum non, finibus a urna. Quisque tincidunt dui quis congue mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        expected_register: 'Aenean In Lorem Morbi Pellentesque Praesent Praesent Praesent Quisque a ac ac ac adipiscing amet, augue congue consectetur convallis dictum dolor dui egestas. eget elit. et et eu fames felis finibus gravida habitant ipsum justo lacinia ligula. luctus, malesuada mattis. maximus mi mi. morbi nec netus nibh. nisi nisi. non, nunc odio ornare quis quis, sagittis sapien, sed sem, semper senectus sit sodales sodales suscipit, tincidunt tristique turpis urna, urna. ut venenatis. vestibulum volutpat volutpat',
        expected_without_register: 'a ac ac ac adipiscing Aenean amet, augue congue consectetur convallis dictum dolor dui egestas. eget elit. et et eu fames felis finibus gravida habitant In ipsum justo lacinia ligula. Lorem luctus, malesuada mattis. maximus mi mi. Morbi morbi nec netus nibh. nisi nisi. non, nunc odio ornare Pellentesque Praesent Praesent Praesent quis quis, Quisque sagittis sapien, sed sem, semper senectus sit sodales sodales suscipit, tincidunt tristique turpis urna, urna. ut venenatis. vestibulum volutpat volutpat'
    },
    {
        input: 'Curabitur fermentum quam mi, non consequat lacus luctus non. Etiam in odio elit. Etiam ut porta velit. Pellentesque at laoreet massa. Donec ac nibh ipsum. Ut metus odio, hendrerit ut blandit sed, ultrices at ante. Nam ultricies lorem vel eleifend eleifend. Mauris commodo sapien eget metus dapibus vulputate. Sed eleifend massa eget dapibus cursus. Pellentesque ac aliquam massa, id blandit risus. Sed rutrum mi eget orci iaculis, eget rhoncus risus mattis. Sed vel elit lectus. Nullam in maximus dolor. Suspendisse potenti. Proin sodales iaculis lacus et luctus.',
        expected_register: 'Curabitur Donec Etiam Etiam Mauris Nam Nullam Pellentesque Pellentesque Proin Sed Sed Sed Suspendisse Ut ac ac aliquam ante. at at blandit blandit commodo consequat cursus. dapibus dapibus dolor. eget eget eget eget eleifend eleifend eleifend. elit elit. et fermentum hendrerit iaculis iaculis, id in in ipsum. lacus lacus laoreet lectus. lorem luctus luctus. massa massa, massa. mattis. maximus metus metus mi mi, nibh non non. odio odio, orci porta potenti. quam rhoncus risus risus. rutrum sapien sed, sodales ultrices ultricies ut ut vel vel velit. vulputate.',
        expected_without_register: 'ac ac aliquam ante. at at blandit blandit commodo consequat Curabitur cursus. dapibus dapibus dolor. Donec eget eget eget eget eleifend eleifend eleifend. elit elit. et Etiam Etiam fermentum hendrerit iaculis iaculis, id in in ipsum. lacus lacus laoreet lectus. lorem luctus luctus. massa massa, massa. mattis. Mauris maximus metus metus mi mi, Nam nibh non non. Nullam odio odio, orci Pellentesque Pellentesque porta potenti. Proin quam rhoncus risus risus. rutrum sapien Sed Sed Sed sed, sodales Suspendisse ultrices ultricies ut Ut ut vel vel velit. vulputate.'
    },
]
const TestCase9_A = [
    {
        input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit, nunc convallis vestibulum luctus, justo nisi sodales sapien, ac ornare felis odio sed nibh. Praesent augue urna, volutpat ac volutpat quis, maximus ut ligula. Aenean nec semper mi. In sodales sagittis venenatis. Praesent eu lacinia nisi. Praesent mi sem, gravida eget dictum non, finibus a urna. Quisque tincidunt dui quis congue mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        expected_register: 'volutpat volutpat vestibulum venenatis. ut urna. urna, turpis tristique tincidunt suscipit, sodales sodales sit senectus semper sem, sed sapien, sagittis quis, quis ornare odio nunc non, nisi. nisi nibh. netus nec morbi mi. mi maximus mattis. malesuada luctus, ligula. lacinia justo ipsum habitant gravida finibus felis fames eu et et elit. eget egestas. dui dolor dictum convallis consectetur congue augue amet, adipiscing ac ac ac a Quisque Praesent Praesent Praesent Pellentesque Morbi Lorem In Aenean',
        expected_without_register: 'volutpat volutpat vestibulum venenatis. ut urna. urna, turpis tristique tincidunt suscipit, sodales sodales sit senectus semper sem, sed sapien, sagittis Quisque quis, quis Praesent Praesent Praesent Pellentesque ornare odio nunc non, nisi. nisi nibh. netus nec Morbi morbi mi. mi maximus mattis. malesuada luctus, Lorem ligula. lacinia justo ipsum In habitant gravida finibus felis fames eu et et elit. eget egestas. dui dolor dictum convallis consectetur congue augue amet, Aenean adipiscing ac ac ac a'
    },
    {
        input: 'Curabitur fermentum quam mi, non consequat lacus luctus non. Etiam in odio elit. Etiam ut porta velit. Pellentesque at laoreet massa. Donec ac nibh ipsum. Ut metus odio, hendrerit ut blandit sed, ultrices at ante. Nam ultricies lorem vel eleifend eleifend. Mauris commodo sapien eget metus dapibus vulputate. Sed eleifend massa eget dapibus cursus. Pellentesque ac aliquam massa, id blandit risus. Sed rutrum mi eget orci iaculis, eget rhoncus risus mattis. Sed vel elit lectus. Nullam in maximus dolor. Suspendisse potenti. Proin sodales iaculis lacus et luctus.',
        expected_register: 'vulputate. velit. vel vel ut ut ultricies ultrices sodales sed, sapien rutrum risus. risus rhoncus quam potenti. porta orci odio, odio non. non nibh mi, mi metus metus maximus mattis. massa. massa, massa luctus. luctus lorem lectus. laoreet lacus lacus ipsum. in in id iaculis, iaculis hendrerit fermentum et elit. elit eleifend. eleifend eleifend eget eget eget eget dolor. dapibus dapibus cursus. consequat commodo blandit blandit at at ante. aliquam ac ac Ut Suspendisse Sed Sed Sed Proin Pellentesque Pellentesque Nullam Nam Mauris Etiam Etiam Donec Curabitur',
        expected_without_register: 'vulputate. velit. vel vel ut Ut ut ultricies ultrices Suspendisse sodales sed, Sed Sed Sed sapien rutrum risus. risus rhoncus quam Proin potenti. porta Pellentesque Pellentesque orci odio, odio Nullam non. non nibh Nam mi, mi metus metus maximus Mauris mattis. massa. massa, massa luctus. luctus lorem lectus. laoreet lacus lacus ipsum. in in id iaculis, iaculis hendrerit fermentum Etiam Etiam et elit. elit eleifend. eleifend eleifend eget eget eget eget Donec dolor. dapibus dapibus cursus. Curabitur consequat commodo blandit blandit at at ante. aliquam ac ac'
    },
]

describe("A - 9", () => {
    TestCaseA_9.forEach(test => {
        it(`From A to Z register matter`, () => {
                const res = sortA_9(test.input, " ", " ", 1);
                expect(res).toBe(test.expected_register);
        });
        it(`From A to Z register doesn't matter`, () => {
            const res = sortA_9(test.input, " ", " ", 0);
            expect(res).toBe(test.expected_without_register);
        });
    })
});
describe("9 - A", () => {
    TestCase9_A.forEach(test => {
        it(`From Z to A register matter`, () => {
            const res = sort9_A(test.input, " ", " ", 1);
            expect(res).toBe(test.expected_register);
        });
        it(`From Z to A register doesn't matter`, () => {
            const res = sort9_A(test.input, " ", " ", 0);
            expect(res).toBe(test.expected_without_register);
        });
    })
});

