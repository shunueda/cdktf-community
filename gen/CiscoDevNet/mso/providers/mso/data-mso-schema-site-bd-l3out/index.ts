// https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteBdL3OutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#bd_name DataMsoSchemaSiteBdL3Out#bd_name}
  */
  readonly bdName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#id DataMsoSchemaSiteBdL3Out#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#l3out_name DataMsoSchemaSiteBdL3Out#l3out_name}
  */
  readonly l3OutName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#l3out_schema_id DataMsoSchemaSiteBdL3Out#l3out_schema_id}
  */
  readonly l3OutSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#l3out_template_name DataMsoSchemaSiteBdL3Out#l3out_template_name}
  */
  readonly l3OutTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#schema_id DataMsoSchemaSiteBdL3Out#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#site_id DataMsoSchemaSiteBdL3Out#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#template_name DataMsoSchemaSiteBdL3Out#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out mso_schema_site_bd_l3out}
*/
export class DataMsoSchemaSiteBdL3Out extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_bd_l3out";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteBdL3Out resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteBdL3Out to import
  * @param importFromId The id of the existing DataMsoSchemaSiteBdL3Out that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteBdL3Out to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_bd_l3out", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_bd_l3out mso_schema_site_bd_l3out} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteBdL3OutConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteBdL3OutConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_bd_l3out',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdName = config.bdName;
    this._id = config.id;
    this._l3OutName = config.l3OutName;
    this._l3OutSchemaId = config.l3OutSchemaId;
    this._l3OutTemplateName = config.l3OutTemplateName;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bd_name - computed: false, optional: false, required: true
  private _bdName?: string; 
  public get bdName() {
    return this.getStringAttribute('bd_name');
  }
  public set bdName(value: string) {
    this._bdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdNameInput() {
    return this._bdName;
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

  // l3out_name - computed: false, optional: false, required: true
  private _l3OutName?: string; 
  public get l3OutName() {
    return this.getStringAttribute('l3out_name');
  }
  public set l3OutName(value: string) {
    this._l3OutName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutNameInput() {
    return this._l3OutName;
  }

  // l3out_schema_id - computed: true, optional: true, required: false
  private _l3OutSchemaId?: string; 
  public get l3OutSchemaId() {
    return this.getStringAttribute('l3out_schema_id');
  }
  public set l3OutSchemaId(value: string) {
    this._l3OutSchemaId = value;
  }
  public resetL3OutSchemaId() {
    this._l3OutSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutSchemaIdInput() {
    return this._l3OutSchemaId;
  }

  // l3out_template_name - computed: true, optional: true, required: false
  private _l3OutTemplateName?: string; 
  public get l3OutTemplateName() {
    return this.getStringAttribute('l3out_template_name');
  }
  public set l3OutTemplateName(value: string) {
    this._l3OutTemplateName = value;
  }
  public resetL3OutTemplateName() {
    this._l3OutTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutTemplateNameInput() {
    return this._l3OutTemplateName;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bd_name: cdktf.stringToTerraform(this._bdName),
      id: cdktf.stringToTerraform(this._id),
      l3out_name: cdktf.stringToTerraform(this._l3OutName),
      l3out_schema_id: cdktf.stringToTerraform(this._l3OutSchemaId),
      l3out_template_name: cdktf.stringToTerraform(this._l3OutTemplateName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bd_name: {
        value: cdktf.stringToHclTerraform(this._bdName),
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
      l3out_name: {
        value: cdktf.stringToHclTerraform(this._l3OutName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_schema_id: {
        value: cdktf.stringToHclTerraform(this._l3OutSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_template_name: {
        value: cdktf.stringToHclTerraform(this._l3OutTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
