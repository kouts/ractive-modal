import Ractive from 'ractive';

export default Ractive.extend({
    template: `
        <button type="button" class="btn btn-primary" on-click="@this.set('show_modal_1', true)">{{button_text_1}}</button>

        <modal title="First modal window" class="" style="max-width:700px;" basedon="{{show_modal_1}}" live="true" body_lock_scroll="true">
            <div class="row">
                <div class="col-md-4 form-group">
                    <label>Field 1</label>
                    <input type="text" value="" class="form-control" autofocus />
                </div>
                <div class="col-md-4 form-group">
                    <label>Field 2</label>
                    <input type="text" value="" class="form-control" />
                </div>
                <div class="col-md-4 form-group">
                    <label>Field 3</label>
                    <input type="text" value="" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-12">
                    <p>
                        Vestibulum sed dui accumsan, rhoncus enim eget, suscipit mi. Sed egestas non arcu at ultricies. Aenean tristique mauris eu ligula feugiat, eu condimentum erat pharetra. Maecenas bibendum ante mi, in mattis nisl fringilla vitae. Duis sollicitudin est id purus venenatis tincidunt. Donec vitae nulla ac lorem tristique varius et in mauris. Aenean molestie dui eu mauris pretium iaculis. Phasellus varius mi in molestie congue. Nullam non ultrices libero.
                    </p>
                </div>
            </div>
            <hr class="full-hr" />
            <div class="row">
                <div class="col col-sm-12">
                    <button type="button" class="btn btn-primary" on-click="@this.set('show_modal_2', true)">Open second modal window</button>
                    <button type="button" class="btn btn btn-danger float-right" on-click="@this.set('show_modal_1', false)">Close</button>        
                </div>
            </div>
        </modal>
    `,
    data: function(){
        return {
            button_text_1: 'Open first modal',
            show_modal_1: false,
            show_modal_2: false
        }
    }
});