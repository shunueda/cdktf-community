// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciContractSubjectOneWayFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#action DataAciContractSubjectOneWayFilter#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#annotation DataAciContractSubjectOneWayFilter#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#contract_subject_dn DataAciContractSubjectOneWayFilter#contract_subject_dn}
  */
  readonly contractSubjectDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#description DataAciContractSubjectOneWayFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#directives DataAciContractSubjectOneWayFilter#directives}
  */
  readonly directives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#filter_dn DataAciContractSubjectOneWayFilter#filter_dn}
  */
  readonly filterDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#id DataAciContractSubjectOneWayFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#name_alias DataAciContractSubjectOneWayFilter#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#priority_override DataAciContractSubjectOneWayFilter#priority_override}
  */
  readonly priorityOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter aci_contract_subject_one_way_filter}
*/
export class DataAciContractSubjectOneWayFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_contract_subject_one_way_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciContractSubjectOneWayFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciContractSubjectOneWayFilter to import
  * @param importFromId The id of the existing DataAciContractSubjectOneWayFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciContractSubjectOneWayFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_contract_subject_one_way_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/contract_subject_one_way_filter aci_contract_subject_one_way_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciContractSubjectOneWayFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciContractSubjectOneWayFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_contract_subject_one_way_filter',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._annotation = config.annotation;
    this._contractSubjectDn = config.contractSubjectDn;
    this._description = config.description;
    this._directives = config.directives;
    this._filterDn = config.filterDn;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._priorityOverride = config.priorityOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // contract_subject_dn - computed: false, optional: false, required: true
  private _contractSubjectDn?: string; 
  public get contractSubjectDn() {
    return this.getStringAttribute('contract_subject_dn');
  }
  public set contractSubjectDn(value: string) {
    this._contractSubjectDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractSubjectDnInput() {
    return this._contractSubjectDn;
  }

  // description - computed: true, optional: true, required: false
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

  // directives - computed: true, optional: true, required: false
  private _directives?: string[]; 
  public get directives() {
    return this.getListAttribute('directives');
  }
  public set directives(value: string[]) {
    this._directives = value;
  }
  public resetDirectives() {
    this._directives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directivesInput() {
    return this._directives;
  }

  // filter_dn - computed: false, optional: false, required: true
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }

  // tn_vz_filter_name - computed: true, optional: false, required: false
  public get tnVzFilterName() {
    return this.getStringAttribute('tn_vz_filter_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotation: cdktf.stringToTerraform(this._annotation),
      contract_subject_dn: cdktf.stringToTerraform(this._contractSubjectDn),
      description: cdktf.stringToTerraform(this._description),
      directives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._directives),
      filter_dn: cdktf.stringToTerraform(this._filterDn),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      priority_override: cdktf.stringToTerraform(this._priorityOverride),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_subject_dn: {
        value: cdktf.stringToHclTerraform(this._contractSubjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._directives),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter_dn: {
        value: cdktf.stringToHclTerraform(this._filterDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_override: {
        value: cdktf.stringToHclTerraform(this._priorityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
