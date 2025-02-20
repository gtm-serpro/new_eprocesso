class BRAccordion {
    private readonly name: string;
    private readonly component: HTMLElement;
    private readonly isSingle: boolean;

    constructor(name: string, component: HTMLElement) {
        if (!name || typeof name !== 'string') {
            throw new Error('BRAccordion: name parameter must be a non-empty string');
        }
        if (!(component instanceof HTMLElement)) {
            throw new Error('BRAccordion: component parameter must be an HTMLElement');
        }

        this.name = name;
        this.component = component;
        this.isSingle = this.component.hasAttribute('single');
        this._setBehavior();
        this._initializeState();
    }

    private _initializeState(): void {
        // Initialize ARIA attributes for all items
        this.component.querySelectorAll('.item').forEach(item => {
            const button = item.querySelector('button.header');
            const content = item.querySelector('.content');
            const isActive = item.classList.contains('active');

            if (button && content) {
                button.setAttribute('aria-expanded', isActive.toString());
                content.setAttribute('aria-hidden', (!isActive).toString());
            }
        });
    }

    private _setBehavior(): void {
        // Remove any existing listeners to prevent duplicates
        this.component.removeEventListener("click", this._handleClick.bind(this));
        this.component.addEventListener("click", this._handleClick.bind(this));
    }

    private _handleClick(event: Event): void {
        const target = event.target as HTMLElement;
        if (!target) return;

        const button = target.closest("button.header") as HTMLButtonElement | null;
        if (!button) return;

        if (!this.component.contains(button)) return;

        const parentItem = button.closest(".item") as HTMLElement | null;
        if (!parentItem) return;

        event.preventDefault();
        event.stopPropagation(); // Prevent event bubbling

        this._collapse(parentItem);
    }

    private _collapse(selectedItem: HTMLElement): void {
        if (this.isSingle) {
            // Close all other items
            this.component.querySelectorAll('.item.active').forEach(item => {
                if (item !== selectedItem) {
                    item.classList.remove('active');
                    this._updateItemState(item as HTMLElement, false);
                }
            });
        }

        // Toggle the selected item
        const isActive = selectedItem.classList.contains('active');
        selectedItem.classList.toggle('active');
        this._updateItemState(selectedItem, !isActive);
    }

    private _updateItemState(item: HTMLElement, isActive: boolean): void {
        // Update ARIA attributes
        const button = item.querySelector('button.header');
        const content = item.querySelector('.content');

        if (button && content) {
            button.setAttribute('aria-expanded', isActive.toString());
            content.setAttribute('aria-hidden', (!isActive).toString());
        }

        // Update icon
        const iconElement = item.querySelector(".icon i");
        if (iconElement) {
            iconElement.classList.toggle("fa-angle-down", !isActive);
            iconElement.classList.toggle("fa-angle-up", isActive);
        }
    }

    public destroy(): void {
        this.component.removeEventListener("click", this._handleClick.bind(this));
    }
}

export default BRAccordion;