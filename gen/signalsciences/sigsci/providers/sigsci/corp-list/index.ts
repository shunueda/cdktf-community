// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CorpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional list description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#description CorpList#description}
  */
  readonly description?: string;
  /**
  * List entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#entries CorpList#entries}
  */
  readonly entries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#id CorpList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Descriptive list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#name CorpList#name}
  */
  readonly name: string;
  /**
  * List types (string, ip, country, wildcard, signal)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#type CorpList#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list sigsci_corp_list}
*/
export class CorpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_corp_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CorpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CorpList to import
  * @param importFromId The id of the existing CorpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CorpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_corp_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_list sigsci_corp_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CorpListConfig
  */
  public constructor(scope: Construct, id: string, config: CorpListConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_corp_list',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._entries = config.entries;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // entries - computed: false, optional: false, required: true
  private _entries?: string[]; 
  public get entries() {
    return cdktf.Fn.tolist(this.getListAttribute('entries'));
  }
  public set entries(value: string[]) {
    this._entries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entries),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
