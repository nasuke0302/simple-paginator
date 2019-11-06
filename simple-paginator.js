import { ReactiveVar } from 'meteor/reactive-var'
// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See simple-paginator-tests.js for an example of importing.
export const paginator = {
    arr: new ReactiveVar([]),
    startIndex: new ReactiveVar(0),
    endIndex: new ReactiveVar(0),
    pageSize: new ReactiveVar(3),
    pageNumber: new ReactiveVar(1),
    totalPages: new ReactiveVar(0),

    setArray(arr) {
        this.arr.set(arr);
        return this;
    },
    getTotalPages() {
        const totalPages = this.arr.get().length / this.pageSize.get();
        let pagesArr = [];
        for (let i = 0; i < totalPages; i++) {
            pagesArr.push(i + 1);
        }
        this.totalPages.set(pagesArr);
        return this.totalPages.get();
    },
    getPage() {
        this.endIndex.set(this.pageNumber.get() * this.pageSize.get());
        this.startIndex.set((this.pageNumber.get() - 1) * this.pageSize.get());

        const items = this.arr.get().slice(this.startIndex.get(), this.endIndex.get());
        return items;
    },
    currPageNumber() {
        return this.pageNumber.get();
    },
    incrementPage() {
        let pageNumber = this.pageNumber.get();
        (pageNumber + 1 > this.totalPages.get().length) ? '' : this.pageNumber.set(pageNumber + 1);
        return this;
    },
    decrementPage() {
        const pageNumber = this.pageNumber.get();
        (pageNumber === 1) ? '' : this.pageNumber.set(pageNumber - 1);
        return this
    },
    setPageNumber(pageNumber) {
        (pageNumber < 1) ? this.pageNumber.set(1) : this.pageNumber.set(pageNumber);
        return this
    },
    setPageSize(pageSize) {
        (pageSize < 1) ? this.pageSize.set(1) : this.pageSize.set(pageSize);
        return this;
    }
};