// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpDatatypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#comment DlpDatatype#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#id DlpDatatype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#look_ahead DlpDatatype#look_ahead}
  */
  readonly lookAhead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#look_back DlpDatatype#look_back}
  */
  readonly lookBack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#match_ahead DlpDatatype#match_ahead}
  */
  readonly matchAhead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#match_around DlpDatatype#match_around}
  */
  readonly matchAround?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#match_back DlpDatatype#match_back}
  */
  readonly matchBack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#name DlpDatatype#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#pattern DlpDatatype#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#transform DlpDatatype#transform}
  */
  readonly transform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#vdomparam DlpDatatype#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#verify DlpDatatype#verify}
  */
  readonly verify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#verify2 DlpDatatype#verify2}
  */
  readonly verify2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#verify_transformed_pattern DlpDatatype#verify_transformed_pattern}
  */
  readonly verifyTransformedPattern?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype fortios_dlp_datatype}
*/
export class DlpDatatype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_dlp_datatype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpDatatype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpDatatype to import
  * @param importFromId The id of the existing DlpDatatype that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpDatatype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_dlp_datatype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_datatype fortios_dlp_datatype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpDatatypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlpDatatypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_dlp_datatype',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._id = config.id;
    this._lookAhead = config.lookAhead;
    this._lookBack = config.lookBack;
    this._matchAhead = config.matchAhead;
    this._matchAround = config.matchAround;
    this._matchBack = config.matchBack;
    this._name = config.name;
    this._pattern = config.pattern;
    this._transform = config.transform;
    this._vdomparam = config.vdomparam;
    this._verify = config.verify;
    this._verify2 = config.verify2;
    this._verifyTransformedPattern = config.verifyTransformedPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // look_ahead - computed: true, optional: true, required: false
  private _lookAhead?: number; 
  public get lookAhead() {
    return this.getNumberAttribute('look_ahead');
  }
  public set lookAhead(value: number) {
    this._lookAhead = value;
  }
  public resetLookAhead() {
    this._lookAhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookAheadInput() {
    return this._lookAhead;
  }

  // look_back - computed: true, optional: true, required: false
  private _lookBack?: number; 
  public get lookBack() {
    return this.getNumberAttribute('look_back');
  }
  public set lookBack(value: number) {
    this._lookBack = value;
  }
  public resetLookBack() {
    this._lookBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackInput() {
    return this._lookBack;
  }

  // match_ahead - computed: true, optional: true, required: false
  private _matchAhead?: number; 
  public get matchAhead() {
    return this.getNumberAttribute('match_ahead');
  }
  public set matchAhead(value: number) {
    this._matchAhead = value;
  }
  public resetMatchAhead() {
    this._matchAhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAheadInput() {
    return this._matchAhead;
  }

  // match_around - computed: false, optional: true, required: false
  private _matchAround?: string; 
  public get matchAround() {
    return this.getStringAttribute('match_around');
  }
  public set matchAround(value: string) {
    this._matchAround = value;
  }
  public resetMatchAround() {
    this._matchAround = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAroundInput() {
    return this._matchAround;
  }

  // match_back - computed: true, optional: true, required: false
  private _matchBack?: number; 
  public get matchBack() {
    return this.getNumberAttribute('match_back');
  }
  public set matchBack(value: number) {
    this._matchBack = value;
  }
  public resetMatchBack() {
    this._matchBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBackInput() {
    return this._matchBack;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // transform - computed: false, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // verify2 - computed: false, optional: true, required: false
  private _verify2?: string; 
  public get verify2() {
    return this.getStringAttribute('verify2');
  }
  public set verify2(value: string) {
    this._verify2 = value;
  }
  public resetVerify2() {
    this._verify2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verify2Input() {
    return this._verify2;
  }

  // verify_transformed_pattern - computed: true, optional: true, required: false
  private _verifyTransformedPattern?: string; 
  public get verifyTransformedPattern() {
    return this.getStringAttribute('verify_transformed_pattern');
  }
  public set verifyTransformedPattern(value: string) {
    this._verifyTransformedPattern = value;
  }
  public resetVerifyTransformedPattern() {
    this._verifyTransformedPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTransformedPatternInput() {
    return this._verifyTransformedPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      look_ahead: cdktf.numberToTerraform(this._lookAhead),
      look_back: cdktf.numberToTerraform(this._lookBack),
      match_ahead: cdktf.numberToTerraform(this._matchAhead),
      match_around: cdktf.stringToTerraform(this._matchAround),
      match_back: cdktf.numberToTerraform(this._matchBack),
      name: cdktf.stringToTerraform(this._name),
      pattern: cdktf.stringToTerraform(this._pattern),
      transform: cdktf.stringToTerraform(this._transform),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      verify: cdktf.stringToTerraform(this._verify),
      verify2: cdktf.stringToTerraform(this._verify2),
      verify_transformed_pattern: cdktf.stringToTerraform(this._verifyTransformedPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      look_ahead: {
        value: cdktf.numberToHclTerraform(this._lookAhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      look_back: {
        value: cdktf.numberToHclTerraform(this._lookBack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_ahead: {
        value: cdktf.numberToHclTerraform(this._matchAhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_around: {
        value: cdktf.stringToHclTerraform(this._matchAround),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_back: {
        value: cdktf.numberToHclTerraform(this._matchBack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transform: {
        value: cdktf.stringToHclTerraform(this._transform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify: {
        value: cdktf.stringToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify2: {
        value: cdktf.stringToHclTerraform(this._verify2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_transformed_pattern: {
        value: cdktf.stringToHclTerraform(this._verifyTransformedPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
