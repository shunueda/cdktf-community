// https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioPackDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination#group_id DataCriblioPackDestination#group_id}
  */
  readonly groupId: string;
  /**
  * Unique ID to GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination#id DataCriblioPackDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination#pack DataCriblioPackDestination#pack}
  */
  readonly pack: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination criblio_pack_destination}
*/
export class DataCriblioPackDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_pack_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioPackDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioPackDestination to import
  * @param importFromId The id of the existing DataCriblioPackDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioPackDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_pack_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.18.8/docs/data-sources/pack_destination criblio_pack_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioPackDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioPackDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_pack_destination',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.18.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._pack = config.pack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // pack - computed: false, optional: false, required: true
  private _pack?: string; 
  public get pack() {
    return this.getStringAttribute('pack');
  }
  public set pack(value: string) {
    this._pack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packInput() {
    return this._pack;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      pack: cdktf.stringToTerraform(this._pack),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pack: {
        value: cdktf.stringToHclTerraform(this._pack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
