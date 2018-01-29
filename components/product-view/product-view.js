editItem = (selectedCode, selectedName, selectedUrl, selectedDescription, selectedCount, selectedRemainder) => {
    this.setState({
        selectedCode: selectedCode,
        selectedName: selectedName,
        selectedUrl: selectedUrl,
        selectedDescription: selectedDescription,
        selectedCount: selectedCount,
        selectedRemainder: selectedRemainder,
        workMode: 1
    }, this.disableSave);
}

nameChanged = (newName) => {
    if (!newName) {
        this.setState({
            errorName: true
        }, this.disableSave)
    } else {
        this.setState({
            selectedName: newName,
            errorName: false
        }, this.disableSave)
    }
}

countChanged = (newCount) => {
    if (!newCount) {
        this.setState({
            errorCount: true
        }, this.disableSave)
    } else {
        var count = Number(newCount);
        this.setState({
            selectedCount: count,
            errorCount: false
        }, this.disableSave)
    }
}

descriptionChanged = (newDescription) => {
    if (!newDescription) {
        this.setState({
            errorDescription: true
        }, this.disableSave);
    } else {
        this.setState({
            selectedDescription: newDescription,
            errorDescription: false
        }, this.disableSave);
    }
}

remainderChanged = (newRemainder) => {
    if (!newRemainder) {
        this.setState({
            errorReminder: true
        }, this.disableSave);
    } else {
        var remainder = Number(newRemainder);
        this.setState({
            selectedRemainder: remainder,
            errorReminder: false
        }, this.disableSave);
    }
}

newItem = (mode) => {
    this.setState({
        workMode: 2,
        counter: this.state.counter++,
        selectedCode: this.state.counter,
        disableSave: true
    });
}

saveItem = () => {
    (this.state.workMode == 1)
        ? this.state.products.forEach(item => {
            if (this.state.selectedCode == item.code) {
                item.name = this.state.selectedName;
                item.url = this.state.selectedUrl;
                item.count = this.state.selectedCount;
                item.description = this.state.selectedDescription;
                item.remainder = this.state.selectedRemainder;
            }
        })
        : this.state.products.push({
            code: this.state.selectedCode,
            name: this.state.selectedName,
            url: this.state.selectedUrl,
            count: this.state.selectedCount,
            description: this.state.selectedDescription,
            remainder: this.state.selectedRemainder
        });
    this.setState({
        products: this.state.products.slice(),
        workMode: 0,
        disableSave: false
    }, this.disableSave);
}

deleteItem = (deleteCode) => {
    this.state.products.forEach((item, index) => {
        if (deleteCode == item.code)
            this.state.products.splice(index, 1);
    });
    this.setState({
        products: this.state.products.slice(),
        workMode: 0,
        disableSave: false
    }, this.disableSave);
}

closeForm = () => {
    this.setState({
        workMode: 0,
        errorName: false,
        errorCount: false,
        errorDescription: false,
        errorReminder: false,
        disableSave: false
    });
}

disableSave = () => {
    if (this.state.errorName || this.state.errorCount || this.state.errorDescription || this.state.errorReminder) {
        this.setState({ disableSave: true });
    } else {
        this.setState({ disableSave: false });
    }
}