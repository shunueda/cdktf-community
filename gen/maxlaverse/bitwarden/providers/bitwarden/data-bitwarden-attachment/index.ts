// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBitwardenAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment#id DataBitwardenAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Identifier of the item the attachment belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment#item_id DataBitwardenAttachment#item_id}
  */
  readonly itemId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment bitwarden_attachment}
*/
export class DataBitwardenAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBitwardenAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBitwardenAttachment to import
  * @param importFromId The id of the existing DataBitwardenAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBitwardenAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/attachment bitwarden_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBitwardenAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataBitwardenAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_attachment',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._itemId = config.itemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
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

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      item_id: cdktf.stringToTerraform(this._itemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
