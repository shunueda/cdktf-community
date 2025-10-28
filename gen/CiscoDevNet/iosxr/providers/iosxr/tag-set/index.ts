// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set#device TagSet#device}
  */
  readonly device?: string;
  /**
  * Configures a tag-set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set#rpl_tag_set TagSet#rpl_tag_set}
  */
  readonly rplTagSet: string;
  /**
  * Set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set#set_name TagSet#set_name}
  */
  readonly setName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set iosxr_tag_set}
*/
export class TagSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_tag_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagSet to import
  * @param importFromId The id of the existing TagSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_tag_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/tag_set iosxr_tag_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagSetConfig
  */
  public constructor(scope: Construct, id: string, config: TagSetConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_tag_set',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._rplTagSet = config.rplTagSet;
    this._setName = config.setName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rpl_tag_set - computed: false, optional: false, required: true
  private _rplTagSet?: string; 
  public get rplTagSet() {
    return this.getStringAttribute('rpl_tag_set');
  }
  public set rplTagSet(value: string) {
    this._rplTagSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rplTagSetInput() {
    return this._rplTagSet;
  }

  // set_name - computed: false, optional: false, required: true
  private _setName?: string; 
  public get setName() {
    return this.getStringAttribute('set_name');
  }
  public set setName(value: string) {
    this._setName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setNameInput() {
    return this._setName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      rpl_tag_set: cdktf.stringToTerraform(this._rplTagSet),
      set_name: cdktf.stringToTerraform(this._setName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpl_tag_set: {
        value: cdktf.stringToHclTerraform(this._rplTagSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_name: {
        value: cdktf.stringToHclTerraform(this._setName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
