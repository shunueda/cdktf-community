// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrAutoTagConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#implementation DataSonarrAutoTagCondition#implementation}
  */
  readonly implementation: string;
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#name DataSonarrAutoTagCondition#name}
  */
  readonly name: string;
  /**
  * Negate flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#negate DataSonarrAutoTagCondition#negate}
  */
  readonly negate: boolean | cdktf.IResolvable;
  /**
  * Computed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#required DataSonarrAutoTagCondition#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#value DataSonarrAutoTagCondition#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition sonarr_auto_tag_condition}
*/
export class DataSonarrAutoTagCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_auto_tag_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrAutoTagCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrAutoTagCondition to import
  * @param importFromId The id of the existing DataSonarrAutoTagCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrAutoTagCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_auto_tag_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/auto_tag_condition sonarr_auto_tag_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrAutoTagConditionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrAutoTagConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_auto_tag_condition',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._implementation = config.implementation;
    this._name = config.name;
    this._negate = config.negate;
    this._required = config.required;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
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

  // negate - computed: false, optional: false, required: true
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      implementation: cdktf.stringToTerraform(this._implementation),
      name: cdktf.stringToTerraform(this._name),
      negate: cdktf.booleanToTerraform(this._negate),
      required: cdktf.booleanToTerraform(this._required),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
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
      negate: {
        value: cdktf.booleanToHclTerraform(this._negate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
